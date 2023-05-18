const Academy = require('../pkg/akademijaModel/akademijaSchema');
// const Kurs = require('../pkg/kursModel/kursSchema'); 

const getWebsite = async (req, res) => {
  try {
    const akademii = await Academy.find();
    res.status(200).render('test', {
      titleOfPage: 'Тест за backend развој на софтвер',
      akademii
    });

  } catch(err){
    res.staus(500).send('Error getting website');
  }
};

module.exports = {
  getWebsite
}

