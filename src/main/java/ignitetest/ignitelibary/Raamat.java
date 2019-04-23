package ignitetest.ignitelibary;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Raamat {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    private String pealkiri;
    private String autor;
    private String innerId;

    public Raamat(){}

    public Raamat(String pealkiri, String autor, String innerid) {
        this.pealkiri = pealkiri;
        this.autor = autor;
        this.innerId = innerid;
    }

    public String getPealkiri() {
        return pealkiri;
    }

    public void setPealkiri(String pealkiri) {
        this.pealkiri = pealkiri;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getInnerId() {
        return innerId;
    }


    public long getId(){
        return id;
    }

}
