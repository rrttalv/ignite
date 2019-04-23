package ignitetest.ignitelibary;

import javax.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface Raamatukogu extends JpaRepository<Raamat, Long>{
    List<Raamat> getRaamatsIdBetween(Long start, Long fin);
}