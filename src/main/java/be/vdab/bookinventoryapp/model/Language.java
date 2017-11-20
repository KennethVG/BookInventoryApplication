package be.vdab.bookinventoryapp.model;

public enum Language {

    DUTCH("nl"), ENGLISH("en");

    private final String abbreviation;

    Language(String abbreviation){
        this.abbreviation = abbreviation;
    }

    public String getAbbreviation() {
        return abbreviation;
    }
}
