package ignitetest.ignitelibary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Controller {
    private Raamatukogu Raamatukogu;
    @Autowired
    public Controller(Raamatukogu raamatukogu){
        this.Raamatukogu = raamatukogu;
    }

    @RequestMapping(value = "/{loaded}", method = RequestMethod.GET,  produces={"application/json"})
    public List<Raamat> paginate(@PathVariable long loaded){
        int limit = 3;
        return Raamatukogu.getRaamatsByIdBetween(loaded, loaded+limit);
    }
    @RequestMapping(value = "/new", method = RequestMethod.POST)
    public List<Raamat> create(@RequestBody Raamat postedRaamat){
        Raamatukogu.save(postedRaamat);
        return Raamatukogu.getRaamatsByIdBetween(Raamatukogu.count()-3, Raamatukogu.count()+1);
    }
    @RequestMapping(value = "/edit/{bookid}", method = RequestMethod.PUT, consumes = {"application/json"})
    public Raamat update(@PathVariable long bookid, @RequestBody Raamat editedRaamat){
        Raamat toEdit = Raamatukogu.findById(bookid);
        toEdit.setAutor(editedRaamat.getAutor());
        toEdit.setPealkiri(editedRaamat.getPealkiri());
        Raamatukogu.save(toEdit);
        return toEdit;
    }
}

