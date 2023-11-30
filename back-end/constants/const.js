const wadiah = {
    ORDINARY:"ordinary",
    WOMEN:"women",
    YOUTH:"youth",
    TEENYOUTH:"teenYouth",
    EDUCATIONAL:"educational",
    ZAKAT:"zakat",
    NIKAH:"nikah",
    LABBAIK:"labbaik",
    OTHER:"other",
    NULL:""
}

const amanah ={
    CHEQUE:"cheque",
    ECXACCOUNT:"ecxAccount",
    NULL:""
}

const mudarabah = {
    ORDINARY:"ordinary",
    WOMEN:"women",
    YOUTH:"youth",
    TEENYOUTH:"teenYouth",
    EDUCATIONAL:"educational",
    ZAKAT:"zakat",
    NIKAH:"nikah",
    LABBAIK:"labbaik",
    OTHER:"other",
    NULL:""
}

const fyc = {
    AMANAHCHEQUE:"amanahCheque",
    WADIAHSAVING:"wadiahSaving",
    WADIAHDIASPORA:"wadiahDiaspora",
    OTHER:"other",
    NULL:""
}

const fixedTime = {
    ORDINARY:"ordinary",
    WOMEN:"women",
    YOUTH:"youth",
    TEENYOUTH:"teenYouth",
    EDUCATIONAL:"educational",
    OTHER:"other",
    NULL:""
}

const savingAccount = {
    ORDINARY:"ordinary",
    WOMEN:"women",
    YOUTH:"youth",
    TEENYOUTH:"teenYouth",
    EDUCATIONAL:"educational",
    OTHER:"other",
    NULL:""
}

const currency = {
    BIRR:"birr",
    DOLLAR:"dollar",
    POUND:"pound",
    EURO:"euro",
    OTHER:"other",
    NULL:""
}

const maritalStatus = {
    MARRIED:'married',
    SINGLE:'single',
    OTHER:'other',
    NULL:""
}

const gender ={
    MALE:"male",
    FEMALE:"female",
    NULL:""
}

const homeType={
    RENTED:'rented',
    SELFOWNED: 'selfOwned',
    COMPANYPROVIDED:'companyProvided',
    MORTAGE:'mortage',
    WITHPARENTS:'withParents',
    OTHER:'other',
    NULL:""
}

const identification = {
    NATIONALID:"nationalId",
    LICENSE:"License",
    PASSPORT:"passPort",
    OTHER:"other",
    NULL:""
}

const cardType = {
    DEBIT:"debit",
    CREDIT:"credit",
    NULL:""
}

const electronicBanking = {
    MOBILEBANKING:"mobileBanking",
    INTERNETBANKING:"internetBanking",
    NULL:""
}

const transactionAlert = {
    EMAIL:"email",
    SMS:"sms",
    NULL:""
}

const statement = {
    EMAIL:'email',
    BRANCHREQUEST:"branchRequest",
    NULL:""
}

const statementDuration ={
    MONTHLY:"monthly",
    QUARTERLY:"quarterly",
    SEMIANNUALLY:"semiAnnually",
    ANNUALLY:"annually",
    NULL:""
}

const chequeCategory = {
    25:"25",
    50:"50",
    100:"100",
    OTHER:"other",
    NULL:""
}

const employment = {
    GOVERMENT:"goverment",
    PRIVATE:"private",
    SELFEMPLOYED:"selfEmployed",
    INTERNATIONAL:"international",
    NGO:"ngo",
    DIPLOMAT:"diplomat",
    RELIGIOUS:"religious",
    HOUSEWIFE:"houseWife",
    RETIRED:"retired",
    UNEMPLOYED:"unemployed",
    STUDENT:"student",
    OTHER:"other",
    NULL:""
}

const monthlyIncome = {
    BIRR:"2000",
    BIRR:"25001-50000",
    BIRR:"50001-100000",
    BIRR:"100001-150000",
    BIRR:"150001-200000",
    NULL:""
}

const kinGender ={
    MALE:"male",
    FEMALE:"female",
    NULL:""
}

const banks = {
NIB:"nib",
ABAYBANK:"abay",
ADDIS:"addis",
AWASH:"awash",
ABYSSINIA:"abyssinia",
BERHAN:"berhan",
BUNNA:"bunna",
COMMERCIAL:"commercial",
COOP:"coop",
DASHEN:"dashen",
DEBUB:"debub",
ENAT:"enat",
LION:"lion",
OROMIA:"oromia",
HIBRET:"hibret",
WEGAGEN:"wegagen",
ZEMEN:"zemen",
ZAMZAM:"zamZam",
HIJRA:"hijra",
SIINQEE:"siinqee",
AHADU:"ahadu",
GOH:"goh",
TSEDEY:"tsedey",
NULL:""
}


const accountStatus = {
    ACTIVE:"active",
    DORMANT:"dormant",
    NULL:""
}

const language ={
    AMHARIC:"amharic",
    OROMO:"oromo",
    TIGRIGNA:"tigrigna",
    SOMALIGNA:"somaligna",
    ENGLISH:"english",
    NULL:""
}

const advertisement ={
    TV:"tv",
    NEWSPAPER:"newsPaper",
    CUSTOMER:"customer",
    RADIO:"radio ",
    CUSTOMERPERSONNEL:"customerPersonnel",
    NULL:""
}

module.exports= {monthlyIncome, employment, wadiah, amanah, mudarabah, fyc, fixedTime, savingAccount,
       banks, currency, kinGender, statement, statementDuration,
       homeType,maritalStatus, accountStatus, language, gender,
       identification,cardType,electronicBanking, transactionAlert, chequeCategory, advertisement,
    }