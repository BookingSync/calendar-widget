let locales = {
  'en-GB': {
    shortWeekdayNames: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    longMonthNames: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'GBP',
    minStay: '%number+ nights',
    startOfWeek: 0
  },
  'en-US': {
    shortWeekdayNames: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    longMonthNames: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'USD',
    minStay: '%number+ nights',
    startOfWeek: 1
  },
  'de-DE': {
    shortWeekdayNames: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    longMonthNames: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    shortMonthNames: 'Jan_Feb_Mär_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Dez'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nächte',
    startOfWeek: 1
  },
  'es-ES': {
    shortWeekdayNames: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
    longWeekdayNames: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    longMonthNames: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    shortMonthNames: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ noches',
    startOfWeek: 1
  },
  'fr-FR': {
    shortWeekdayNames: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    longWeekdayNames: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    longMonthNames: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    shortMonthNames: 'jan_fév_mar_avr_mai_juin_juil_aoû_sep_oct_nov_déc'.split('_'),
    formatDate: '%d %b, %Y',
    currency: 'EUR',
    minStay: '%number+ nuits',
    startOfWeek: 1
  },
  'it-IT': {
    shortWeekdayNames: 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
    longWeekdayNames: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    longMonthNames: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    shortMonthNames: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ notti.',
    startOfWeek: 1
  },
  'sv-SE': {
    shortWeekdayNames: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longWeekdayNames: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    longMonthNames: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    shortMonthNames: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nätter',
    startOfWeek: 1
  }
};

// Add aliases
locales = Object.assign({
  en: locales['en-US'],
  de: locales['de-DE'],
  es: locales['es-ES'],
  fr: locales['fr-FR'],
  it: locales['it-IT'],
  sv: locales['sv-SV']
}, locales);

export default locales;
