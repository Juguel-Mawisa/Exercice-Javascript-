function formaterDate(date, locale = "fr-FR") {
    return new Date(date).toLocaleDateString(locale);
}