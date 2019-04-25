package ignitetest.ignitelibary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface Raamatukogu extends JpaRepository<Raamat, Long>{
    List<Raamat> getRaamatsByIdBetween(Long start, Long fin);
    Raamat findById(long id);
}