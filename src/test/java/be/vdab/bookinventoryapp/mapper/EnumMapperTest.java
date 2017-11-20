package be.vdab.bookinventoryapp.mapper;

import be.vdab.bookinventoryapp.model.Genre;
import be.vdab.bookinventoryapp.model.Language;
import org.junit.Before;
import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class EnumMapperTest {

    @Before
    public void init() {

    }

    @Test
    public void testMapToGenre() {
        // 0 = THRILLER
        Genre g = EnumMapper.mapToGenre(0);
        assertThat(g).isEqualTo(Genre.THRILLER);
        assertThat(g.name()).isEqualTo("THRILLER");
        assertThat(g.ordinal()).isEqualTo(0);
    }

    @Test(expected = RuntimeException.class)
    public void testMapToGenreWithException() {
        EnumMapper.mapToGenre(100);
    }


    @Test
    public void testMapToLanguage() {
        Language dutch = EnumMapper.mapToLanguage(0);
        assertThat(dutch).isEqualTo(Language.DUTCH);
        assertThat(dutch.name()).isEqualTo("DUTCH");
        assertThat(dutch.ordinal()).isEqualTo(0);
        assertThat(dutch.getAbbreviation()).isEqualTo("nl");
    }

    @Test(expected = RuntimeException.class)
    public void testMapToLanguageWithException() {
        EnumMapper.mapToLanguage(100);
    }

}
