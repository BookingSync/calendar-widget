let locales = {
  'en-GB': {
    shortWeekdayNames: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    longMonthNames: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'GBP',
    minStay: '%number+ nights',
    maxStay: '%number- nights',
    hasInvalidMinStay: 'minimum stay: %number nights',
    hasInvalidMaxStay: 'maximum stay: %number nights',
    hasInvalidDays: 'booked already',
    startOfWeek: 0,
    labels: {
      calendar: 'Calendar',
      months: 'Months',
      monthsForward: 'Next month',
      monthsBackward: 'Previous month'
    }
  },
  'en-US': {
    shortWeekdayNames: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    longMonthNames: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'USD',
    minStay: '%number+ nights',
    maxStay: '%number- nights',
    hasInvalidMinStay: 'minimum stay: %number nights',
    hasInvalidMaxStay: 'maximum stay: %number nights',
    hasInvalidDays: 'booked already',
    startOfWeek: 1,
    labels: {
      calendar: 'Calendar',
      months: 'Months',
      monthsForward: 'Next month',
      monthsBackward: 'Previous month'
    }
  },
  'de-DE': {
    shortWeekdayNames: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    longWeekdayNames: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    longMonthNames: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    shortMonthNames: 'Jan_Feb_Mär_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Dez'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nächte',
    maxStay: '%number- nächte',
    hasInvalidMinStay: 'mindestaufenthalt: %number Nächte',
    hasInvalidMaxStay: 'maximaler Aufenthalt: %number Nächte',
    hasInvalidDays: 'schon gebucht',
    startOfWeek: 1,
    labels: {
      calendar: 'Kalender',
      months: 'Monate',
      monthsForward: 'Nächster Monat',
      monthsBackward: 'Vorheriger Monat'
    }
  },
  'es-ES': {
    shortWeekdayNames: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
    longWeekdayNames: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    longMonthNames: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    shortMonthNames: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ noches',
    maxStay: '%number- noches',
    hasInvalidMinStay: 'estancia mínima: %number noches',
    hasInvalidMaxStay: 'estancia máxima: %number noches',
    hasInvalidDays: 'ya reservado',
    startOfWeek: 1,
    labels: {
      calendar: 'Calendario',
      months: 'Meses',
      monthsForward: 'Próximo mes',
      monthsBackward: 'Mes anterior'
    }
  },
  'fr-FR': {
    shortWeekdayNames: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    longWeekdayNames: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    longMonthNames: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    shortMonthNames: 'jan_fév_mar_avr_mai_juin_juil_aoû_sep_oct_nov_déc'.split('_'),
    formatDate: '%d %b, %Y',
    currency: 'EUR',
    minStay: '%number+ nuits',
    maxStay: '%number- nuits',
    hasInvalidMinStay: 'séjour minimum : %number nuits',
    hasInvalidMaxStay: 'séjour maximum : %number nuits',
    hasInvalidDays: 'déjà réservé',
    startOfWeek: 1,
    labels: {
      calendar: 'Calendrier',
      months: 'Mois',
      monthsForward: 'Mois suivant',
      monthsBackward: 'Mois précédent'
    }
  },
  'it-IT': {
    shortWeekdayNames: 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
    longWeekdayNames: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    longMonthNames: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    shortMonthNames: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ notti.',
    maxStay: '%number- notti',
    hasInvalidMinStay: 'soggiorno minim: %number notti',
    hasInvalidMaxStay: 'soggiorno massimo: %number notti',
    hasInvalidDays: 'già prenotato',
    startOfWeek: 1,
    labels: {
      calendar: 'Calendario',
      months: 'Mesi',
      monthsForward: 'Mese successivo',
      monthsBackward: 'Mese precedente'
    }
  },
  'sv-SE': {
    shortWeekdayNames: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longWeekdayNames: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    longMonthNames: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    shortMonthNames: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nätter',
    maxStay: '%number- nätter',
    hasInvalidMinStay: 'kortaste vistelse: %number nätter',
    hasInvalidMaxStay: 'maximálny pobyt: %number nätter',
    hasInvalidDays: 'redan bokat',
    startOfWeek: 1,
    labels: {
      calendar: 'Kalender',
      months: 'Månader',
      monthsForward: 'Nästa månad',
      monthsBackward: 'Föregående månad'
    }
  },
  'ru-RU': {
    shortWeekdayNames: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
    longWeekdayNames: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
    longMonthNames: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
    shortMonthNames: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'),
    formatDate: '%d.%b.%Y',
    currency: 'RUB',
    minStay: '%number+ ноч.',
    maxStay: '%number- ноч.',
    hasInvalidMinStay: 'минимальное пребывани: %number ночи',
    hasInvalidMaxStay: 'максимальное пребывание: %number ночи',
    hasInvalidDays: 'забронировано уже',
    startOfWeek: 1,
    labels: {
      calendar: 'Календарь',
      months: 'Месяцы',
      monthsForward: 'Следующий месяц',
      monthsBackward: 'Предыдущий месяц'
    }
  },
  'pl-PL': {
    shortWeekdayNames: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longWeekdayNames: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    longMonthNames: 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
    shortMonthNames: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    formatDate: '%d.%b.%Y',
    currency: 'PLN',
    minStay: '%number+ noce',
    maxStay: '%number- noce',
    hasInvalidMinStay: 'minimalny poby: %number noce',
    hasInvalidMaxStay: 'maksymalny pobyt: %number noce',
    hasInvalidDays: 'już zarezerwowane',
    startOfWeek: 1,
    labels: {
      calendar: 'Kalendarz',
      months: 'Miesiące',
      monthsForward: 'Następny miesiąc',
      monthsBackward: 'Poprzedni miesiąc'
    }
  },
  'nl-NL': {
    shortWeekdayNames: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    longWeekdayNames: 'Zondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrijdag_Zaterdag'.split('_'),
    longMonthNames: 'Januari_Februari_Maart_April_Mei_Juni_Juli_Augustus_September_Oktober_November_December'.split('_'),
    shortMonthNames: 'Jan_Feb_Maa_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
    formatDate: '%b %d, %Y',
    currency: 'EUR',
    minStay: '%number+ nachten',
    maxStay: '%number- nachten',
    hasInvalidMinStay: 'minimaal verblijf: %number nachten',
    hasInvalidMaxStay: 'maximaal verblijf: %number nachten',
    hasInvalidDays: 'al geboekt',
    startOfWeek: 1,
    labels: {
      calendar: 'Kalender',
      months: 'Maanden',
      monthsForward: 'Volgende maand',
      monthsBackward: 'Vorige maand'
    }
  }
};

// Add aliases
locales = Object.assign({
  en: locales['en-US'],
  de: locales['de-DE'],
  es: locales['es-ES'],
  fr: locales['fr-FR'],
  it: locales['it-IT'],
  sv: locales['sv-SV'],
  ru: locales['ru-RU'],
  pl: locales['pl-PL'],
  nl: locales['nl-NL']
}, locales);

export default locales;
