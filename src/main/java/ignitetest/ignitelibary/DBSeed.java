package ignitetest.ignitelibary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DBSeed implements CommandLineRunner {
    private Raamatukogu Raamatukogu;
    @Autowired
    public void DBseed(Raamatukogu raamatukogu){
        this.Raamatukogu = raamatukogu;
    }
    @Override
    public void run(String... args) throws Exception {
        List<Raamat> raamatud = new ArrayList<>();
        raamatud.add(new Raamat("Kivi", "Jaan Mihkel", "HABA222"));
        raamatud.add(new Raamat("Kivi Osa 2", "Jaan Mihkel", "HABA2Z2"));
        raamatud.add(new Raamat("Kivi Osa 3", "Jaan Mihkel", "HABA2Z0"));
        raamatud.add(new Raamat("Saaremaa Seiklus", "Maikel Craft", "SAGAzz"));
        raamatud.add(new Raamat("Kivi Osa 4", "Jaan JR Mihkel", "HABA2Z5"));
        raamatud.add(new Raamat("Jurmala Reis", "Cod Jeremy", "BBBISS"));
        raamatud.add(new Raamat("Pult", "Mihkel Mees", "BBB00S"));
        raamatud.add(new Raamat("Kivi Osa 6", "Jaan JR Mihkel", "HABA2Z1"));
        raamatud.add(new Raamat("Tõde ja Vale", "Anton Jansen Hammsaare", "EEDDZS"));
        raamatud.add(new Raamat("Kõrboja Kodutu", "Hammsaare Ganton", "192723E"));
        raamatud.add(new Raamat("Kivi Osa 7", "Jaan JR Mihkel", "HABA2Z2"));
        raamatud.add(new Raamat("Kalevipoeg Jaanus", "Freder Kreutzwald", "992EE0"));
        Raamatukogu.saveAll(raamatud);
    }
}
