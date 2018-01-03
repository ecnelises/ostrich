package org.angularbaby.ostrich.web;

import org.angularbaby.ostrich.storage.StorageFileNotFoundException;
import org.angularbaby.ostrich.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
public class FileController {

    private final StorageService storageService;

    private String endpoint = "oss-cn-beijing.aliyuncs.com";
    // 云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，创建并使用RAM子账号进行API访问或日常运维，请登录 https://ram.console.aliyun.com 创建
    private String accessKeyId = "LTAIVNEw7ZZuXrps";
    private String accessKeySecret = "5GMKt8K1LU4ZCO6hfgf0FwNOgMAjiH";

    @Autowired
    public FileController(StorageService storageService) {
        this.storageService = storageService;
    }

    /*
     * @GetMapping("/") public String listUploadedFiles(Model model) throws
     * IOException {
     * 
     * model.addAttribute("files", storageService .loadAll() .map(path ->
     * MvcUriComponentsBuilder .fromMethodName(FileController.class,
     * "serveFile", path.getFileName().toString()) .build().toString())
     * .collect(Collectors.toList()));
     * 
     * return "uploadForm"; }
     */
    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

    @RequestMapping("/files/jump")
    public String jump(@RequestParam(name= "filename")String file){
        System.out.println(file+"1");
        String res=this.storageService.jump(file);
        return res;
    }

    @RequestMapping("/files/index")
    public String filesIndex() {
        String res=storageService.showfiles();
        return res;
    }

    @RequestMapping("/files/newfolder")
    public String newfolder(@RequestParam(name="foldername")String folder){
        String res=this.storageService.newfolder(folder);
        return res;
    }

    @RequestMapping("/files/goback")
    public String goback(){
        String res=storageService.goback();;
        return res;
    }

    @RequestMapping("/files/delete")
    public String deletefile(@RequestParam(name="filename")String file, @RequestParam(name="kind")String kind){
        String res=storageService.deletefile(file, kind);
        return res;
    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity
                .ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

    @PostMapping("/")
    public String handleFileUpload(@RequestParam("file") MultipartFile file,
            RedirectAttributes redirectAttributes) {

        storageService.store(file);
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename()
                        + "!");
        return "redirect:/";
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(
            StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }

}
