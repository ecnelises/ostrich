package org.angularbaby.ostrich.repository;

import org.angularbaby.ostrich.entity.UploadedFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<UploadedFile, Long> {

}
