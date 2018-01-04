package org.angularbaby.ostrich.entity;

import javax.persistence.*;

@Entity
@Table(name = "UploadedFile")
public class UploadedFile {

    public UploadedFile(Long key, Long project, String filename){
        this.key=key;
        this.project=project;
        this.filename=filename;
        this.version=1.0f;
    }

    public Long getKey() {
        return key;
    }

    public void setKey(Long key) { this.key = key; }

    public Long getProject() {
        return project;
    }

    public void setProject(Long project){ this.project=project; }

    public String getFilename() { return filename; };

    public void setFilename(String filename) { this.filename=filename; }

    public Float getVersion() { return version; };

    public void setVersion(Float version) { this.version=version; }

    @Id
    @GeneratedValue
    private Long key;

    @Column(nullable = false)
    private Long project;

    @Column(nullable = false)
    private String filename;

    @Column(nullable = false)
    private Float version;
}
