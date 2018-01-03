package org.angularbaby.ostrich.storage;

import com.aliyun.oss.OSSClient;
import com.aliyun.oss.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.stream.Stream;

@Service
public class FileSystemStorageService implements StorageService {


    private String endpoint = "oss-cn-beijing.aliyuncs.com";
    // 云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，创建并使用RAM子账号进行API访问或日常运维，请登录 https://ram.console.aliyun.com 创建
    private String accessKeyId = "LTAIVNEw7ZZuXrps";
    private String accessKeySecret = "5GMKt8K1LU4ZCO6hfgf0FwNOgMAjiH";

    private final Path rootLocation;

    private long bytesRead = 0;
    private long totalBytes = -1;
    private boolean succeed = false;

    private String nowfolder="root/";

    @Autowired
    public FileSystemStorageService(StorageProperties properties) {
        this.rootLocation = Paths.get(properties.getLocation());
    }

    @Override
    public void store(MultipartFile file) {
        try {
            if (file.isEmpty()) {
                throw new StorageException("Failed to store empty file " + file.getOriginalFilename());
            }

            // 创建OSSClient实例
            OSSClient ossClient = new OSSClient(endpoint, accessKeyId, accessKeySecret);
            // 上传文件
            //ossClient.putObject("pubulictest510821", nowfolder+file.getOriginalFilename(), file.getInputStream());

            System.out.println(file.getOriginalFilename()+"正在下载");
            ossClient.putObject(new PutObjectRequest("pubulictest510821", nowfolder+file.getOriginalFilename(), file.getInputStream()).
                    <PutObjectRequest>withProgressListener(new GetProgress.PutObjectProgressListener()));


            // 关闭client
            ossClient.shutdown();
            //Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()));
        } catch (Exception e) {
            throw new StorageException("Failed to store file " + file.getOriginalFilename(), e);
        }
    }

    @Override
    public String showfiles(){
        OSSClient ossClient = new OSSClient(endpoint, accessKeyId, accessKeySecret);
        // 构造ListObjectsRequest请求
        ListObjectsRequest listObjectsRequest = new ListObjectsRequest("pubulictest510821");
        listObjectsRequest.setPrefix(nowfolder);
        listObjectsRequest.setDelimiter("/");
        // 列出Object
        ObjectListing listing = ossClient.listObjects(listObjectsRequest);

        String res="{\"files\":[";
        for (OSSObjectSummary objectSummary : listing.getObjectSummaries()) {
            if(!objectSummary.getKey().toString().equals(nowfolder)) {

                // 生成URL
                Date expiration = new Date(new Date().getTime() + 3600 * 1000);
                URL url = ossClient.generatePresignedUrl("pubulictest510821", objectSummary.getKey(), expiration);

                //获取元数据
                SimplifiedObjectMeta objectMeta = ossClient.getSimplifiedObjectMeta("pubulictest510821", objectSummary.getKey());

                res += "{\"filename\":\"" + getRealfilename(objectSummary.getKey()) + "\", \"kind\":\"file\",\"Url\":\"" + url + "\"" +
                        ",\"size\":\"" + objectMeta.getSize() + "\",\"LastModified\":\"" + objectMeta.getLastModified() + "\"}, ";
            }
        }

        for (String commonPrefix : listing.getCommonPrefixes()) {
            res+="{\"filename\":\""+getRealfilename(commonPrefix)+"\", \"kind\":\"folder\"}, ";
        }

        if(res.charAt(res.length()-2)==',')
            res=res.substring(0,res.length()-2);
        res+="]}";
        return res;
    }

    @Override
    public String jump(String Key) {
        System.out.println(Key);
        nowfolder=nowfolder+Key+"/";
        return showfiles();
    }

    @Override
    public String newfolder(String foldername) {
        // 创建OSSClient实例
        OSSClient ossClient = new OSSClient(endpoint, accessKeyId, accessKeySecret);
        final String keySuffixWithSlash = nowfolder+foldername+"/";
        ossClient.putObject("pubulictest510821", keySuffixWithSlash, new ByteArrayInputStream(new byte[0]));
        // 关闭client
        ossClient.shutdown();

        return showfiles();
    }

    @Override
    public String goback() {
        ;
        String[] folders=nowfolder.split("/");
        nowfolder="";
        for(int i=0;i<folders.length-1;i++){
            nowfolder+=folders[i]+"/";
        }
        return showfiles();
    }

    @Override
    public String deletefile(String Key, String kind) {
        // 创建OSSClient实例
        OSSClient ossClient = new OSSClient(endpoint, accessKeyId, accessKeySecret);
        // 删除Object
        if(kind.equals("file")) {
            ossClient.deleteObject("pubulictest510821", nowfolder + Key);
        }
        else {
            // 构造ListObjectsRequest请求
            ListObjectsRequest listObjectsRequest = new ListObjectsRequest("pubulictest510821");
            listObjectsRequest.setPrefix(nowfolder+Key);
            //listObjectsRequest.setDelimiter("/");
            // 列出Object
            ObjectListing listing = ossClient.listObjects(listObjectsRequest);
            // 遍历所有Object
            for (OSSObjectSummary objectSummary : listing.getObjectSummaries()) {
                //System.out.println(objectSummary.getKey());
                ossClient.deleteObject("pubulictest510821",objectSummary.getKey());
            }
        }
        // 关闭client
        ossClient.shutdown();

        return showfiles();
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(path -> this.rootLocation.relativize(path));
        } catch (IOException e) {
            throw new StorageException("Failed to read stored files", e);
        }

    }

    @Override
    public Path load(String filename) {
        return rootLocation.resolve(filename);
    }

    @Override
    public Resource loadAsResource(String filename) {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if(resource.exists() || resource.isReadable()) {
                return resource;
            }
            else {
                throw new StorageFileNotFoundException("Could not read file: " + filename);

            }
        } catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(rootLocation.toFile());
    }

    @Override
    public void init() {
        try {
            Files.createDirectory(rootLocation);
        } catch (IOException e) {
            throw new StorageException("Could not initialize storage", e);
        }
    }


    public String getRealfilename(String key){
        String[] filename=key.split("/");
        return filename[filename.length-1];
    }
}
