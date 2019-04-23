package ignitetest.ignitelibary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {
    private Raamatukogu Raamatukogu;
    @Autowired
    public Controller(Raamatukogu raamatukogu){
        this.Raamatukogu = raamatukogu;
    }

    @RequestMapping(value = "/{loaded}", method = RequestMethod.GET)
    public List<Raamat> paginate(@PathVariable long loaded){
        int limit = 3;
        return Raamatukogu.getRaamatsByIdBetween(loaded, loaded+limit);
    }
    @RequestMapping(value = "/new", method = RequestMethod.POST)
    public void create(@RequestBody Raamat postedRaamat){
        Raamatukogu.save(postedRaamat);
    }
}

