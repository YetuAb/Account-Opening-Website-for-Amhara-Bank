const express = require('express')
const account = express.Router()
const UserSchema = require('../models/userSchema')

account.post('/account', async(req, res) =>{
    try {
        const latestCustomer = await UserSchema.findOne().sort('-abaAccountNumber');
    let nextAccountNumber;
    if (latestCustomer) {
      nextAccountNumber = latestCustomer.abaAccountNumber + 1;
    } else {
      nextAccountNumber = 9997652589989;
    }
    if (nextAccountNumber > 9999999999999) {
      throw new Error('Maximum account number limit reached.');
    } 
    
    console.log(req.body.initialValues);
    let {
        title, country, expiredDate, other, kinRelationship, banks, interpreterName,
        email, region, chequeAmount, employment, kinHouseNo, accountName, interpreterAddress,
        fullName, city, identification, monthlyIncome, kinTitle, accountNumber, interpreterTel,
        birthPlace, subCity, others, specify, kinCity, accountStatus, agreed, otherType,
        childrenNo, kebele, idNo, annualIncome, kinCountry, language, thirdParty, kinTelNo,
        nationality, hNo, idIssued, employer, kinDate, initialDeposit, test, currency,
        permitNo, telNo, cardType, profession, kinEmail, advertisement, kinSubCity, kinKebele,    
        date, homeType, electronicBanking, positionHeld, kinFullName,  maritalStatus,
        purpose, poBox, transactionAlert, kinGender, wadiah, joint, fyc, mudarabah, dependents,
        gender, statement, kinHNo, amanah, fixed, kinRegion, motherName, chequeCategory, image,
    } = req.body.initialValues;
    joint=true;

    const userData = {title: title, country: country, expiredDate:expiredDate, other:other,kinRelationship: kinRelationship, banks:banks, interpreterName: interpreterName,
        email:email, region:region, chequeAmount: chequeAmount, employment: employment, kinHouseNo: kinHouseNo, accountName: accountName, interpreterAddress: interpreterAddress,
        fullName: fullName, city: city, identification: identification, monthlyIncome: monthlyIncome, kinTitle: kinTitle, accountNumber:accountNumber, interpreterTel: interpreterTel,
        birthPlace:birthPlace, subCity: subCity, others: others, specify:specify, kinCity:kinCity, accountStatus: accountStatus, agreed:agreed,
        childrenNo: childrenNo, kebele: kebele, idNo: idNo, annualIncome:annualIncome, kinCountry: kinCountry, language: language, thirdParty:thirdParty,
        nationality: nationality, hNo: hNo, idIssued: idIssued, employer:employer, kinDate: kinDate, initialDeposit: initialDeposit, test: test,
        permitNo: permitNo, telNo:telNo, cardType: cardType, profession: profession, kinEmail:kinEmail, advertisement: advertisement,     
        date:date, homeType:homeType, electronicBanking:electronicBanking, positionHeld:positionHeld, kinFullName: kinFullName, 
        purpose:purpose, poBox:poBox, transactionAlert:transactionAlert, kinGender: kinGender, wadiah:wadiah, joint: joint, kinSubCity: kinSubCity,
        gender: gender, statement: statement, kinHNo: kinHNo, kinTelNo: kinTelNo, amanah: amanah, fixed: fixed,currency: currency,
        dependents: dependents, chequeCategory: chequeCategory, kinKebele: kinKebele, mudarabah: mudarabah, kinRegion: kinRegion, fyc: fyc,
        motherName: motherName, maritalStatus: maritalStatus, otherType: otherType,  abaAccountNumber: nextAccountNumber, image:image }
    let id = await UserSchema.findOne({
            idNo:idNo
        })
        if(id){
            throw new Error("Customer already registered");
        }
    const newUserSchema = new UserSchema(userData)
    
    const saveUserSchema = await newUserSchema.save()
    console.log(saveUserSchema);
    if (saveUserSchema) {
        res.send('Successfully registered. Thank you.');
    }else {
        res.send('Failed to register.')
    }
    res.end();
    } catch (err) {
        res.send('Failed to register. Error occurred')
        console.log(err.message);
    }
        
})

module.exports = account;