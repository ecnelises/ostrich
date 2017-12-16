package myapp.web;

import myapp.entity.Task;
import myapp.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class TasksController {
    @RequestMapping("/tasks/save")
    public String create(@RequestParam(name = "content")String content, @RequestParam(name = "columnId")int columnId) {
        Task tmp = new Task(columnId, content);
        tasksRepository.save(tmp);
        return tmp.toJSON();
    }

    @RequestMapping("/tasks/index")
    public String index() {
        List<Task> list = tasksRepository.findAll();
        String res = "{\"tasks\":[";
        for (int i = 0; i < list.size(); i++){
            res += list.get(i).toJSON();
            if (i + 1 < list.size()){
                res += ", ";
            }
        }
        res += "]}";
        return res;
    }

    @RequestMapping("/tasks/isdone")
    public String isDone(@RequestParam(name = "id")Long id) {
        Task tmp = tasksRepository.findOne(id);
        tmp.setDone(!tmp.isDone());
        tasksRepository.save(tmp);
        return tmp.toJSON();
    }

    @RequestMapping("/tasks/findOne")
    public String find(@RequestParam(name = "id")Long id) {
        return tasksRepository.findOne(id).toJSON();
    }

    @RequestMapping("/tasks/remove")
    public String remove(@RequestParam(name = "id")Long id) {
        tasksRepository.delete(id);
        return "";
    }

    @RequestMapping("/tasks/changeColumn")
    public String changeColumn(@RequestParam(name = "id")Long id, @RequestParam(name = "columnId")int columnId) {
        Task tmp = tasksRepository.findOne(id);
        tmp.setColumnId(columnId);
        tasksRepository.save(tmp);
        return "";
    }

    @Autowired
    private TasksRepository tasksRepository;
}
