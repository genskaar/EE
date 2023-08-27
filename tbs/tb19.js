// setup 
const data = {
  labels: ['Blattu', 'XCAL', 'Tranced', 'Skaar', 'Enigma', 'Puck', 'Delara Exibil', 'DarthDax', 'Tyron Brandt', 'MINI DarthAzazel', 'Jeeves', 'ArtVandalay', 'Patrick4', 'Marl Jewel', 'WharfRat', 'Javin Fis', 'Nomad', 'G4reth', 'RoTahn Taske', 'T', 'Darthsyn', 'Dârth Jungle Asian', 'Username', 'El Jefe', 'OwningXylophone', 'JakeY', 'Chikiller', 'Rhil Margos', 'Verage Valoor', 'JHang', 'Geralt of Rivia', 'Fidget92', 'Lambert', 'BobaChuck91', 'BobbyMarshal', 'Trask droll', 'Q Ryker', 'Tani Mayse', 'Squanchy420', 'manolis', 'JediAhsoka', 'Scof', 'non7top', 'Avatany', 'Tyrian', 'Yosh', 'Taco Hat', 'Zarlis Rahn', 'Excessive Fist', 'Jonesmalones', ],
  datasets: [{
    label: 'Waves Completed',
    data: ['94', '92', '92', '86', '80', '78', '73', '72', '72', '72', '69', '67', '66', '65', '62', '61', '61', '60', '60', '59', '56', '56', '55', '53', '52', '52', '51', '50', '47', '47', '46', '46', '46', '45', '44', '44', '42', '41', '40', '38', '38', '37', '36', '34', '34', '27', '15', '14', '13', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1
  },{
    label: 'Waves Completed (Phase 1)',
    data: ['23', '22', '20', '21', '21', '20', '18', '20', '17', '19', '19', '20', '17', '20', '17', '18', '20', '18', '20', '16', '19', '16', '15', '18', '13', '17', '15', '16', '16', '14', '16', '14', '18', '12', '15', '2', '13', '16', '17', '13', '14', '15', '16', '12', '9', '14', '8', '14', '0', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 2)',
    data: ['15', '16', '18', '14', '16', '13', '15', '13', '15', '11', '15', '15', '11', '13', '10', '14', '8', '13', '13', '9', '14', '11', '7', '12', '12', '14', '10', '10', '10', '11', '8', '9', '7', '10', '9', '11', '9', '8', '8', '8', '7', '7', '8', '8', '9', '2', '2', '0', '2', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 3)',
    data: ['16', '14', '17', '16', '16', '13', '15', '15', '14', '13', '13', '11', '13', '14', '13', '14', '11', '12', '9', '13', '13', '12', '12', '11', '12', '9', '9', '9', '11', '10', '8', '13', '12', '9', '10', '13', '9', '7', '8', '9', '7', '7', '8', '6', '7', '6', '3', '0', '2', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 4)',
    data: ['19', '20', '18', '16', '16', '16', '16', '16', '15', '18', '12', '11', '14', '14', '14', '7', '11', '11', '13', '12', '4', '11', '13', '7', '11', '11', '10', '10', '9', '6', '9', '7', '8', '7', '9', '7', '8', '8', '7', '7', '5', '7', '4', '4', '6', '5', '2', '0', '2', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 5)',
    data: ['11', '12', '11', '11', '7', '9', '5', '8', '11', '7', '7', '10', '5', '4', '5', '8', '5', '4', '3', '7', '6', '5', '8', '3', '4', '1', '4', '4', '1', '3', '4', '2', '1', '5', '1', '6', '2', '1', '0', '1', '4', '1', '0', '4', '3', '0', '0', '0', '5', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Waves Completed (Phase 6)',
    data: ['10', '8', '8', '8', '4', '7', '4', '0', '0', '4', '3', '0', '6', '0', '3', '0', '6', '2', '2', '2', '0', '1', '0', '2', '0', '0', '3', '1', '0', '3', '1', '1', '0', '2', '0', '5', '1', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '2', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Special Missions',
    data: ['1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '1', '0', '0', '1', '0', '1', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Missions Attempted',
    data: ['59', '58', '57', '56', '53', '54', '47', '49', '50', '54', '48', '40', '47', '50', '51', '40', '51', '45', '47', '46', '39', '47', '43', '41', '40', '47', '45', '45', '40', '41', '37', '44', '44', '35', '34', '37', '30', '48', '32', '36', '25', '33', '35', '29', '31', '24', '20', '7', '12', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Number of phases deployed',
    data: ['5', '5', '6', '4', '6', '5', '6', '5', '5', '5', '6', '5', '5', '5', '6', '5', '6', '6', '4', '5', '5', '6', '5', '6', '5', '5', '6', '6', '6', '5', '6', '6', '5', '6', '5', '5', '6', '6', '5', '5', '6', '6', '5', '5', '5', '5', '5', '5', '5', '5', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Operation Units Deployed',
    data: ['19', '33', '53', '70', '17', '15', '37', '31', '16', '33', '26', '12', '17', '23', '26', '8', '23', '12', '8', '51', '30', '16', '10', '3', '14', '17', '16', '12', '29', '9', '20', '19', '15', '3', '17', '32', '29', '7', '12', '11', '18', '20', '12', '15', '30', '15', '9', '18', '8', '84', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'CM Points',
    data: ['21737192', '21755317', '20643129', '20984742', '17132346', '18879535', '16143596', '16533440', '16125940', '14493127', '15818909', '14503128', '15135159', '14446720', '13083283', '13228440', '13655315', '13317814', '14641252', '12812346', '10891564', '12195470', '12469690', '12983752', '11693439', '9916876', '11058595', '11192814', '9350626', '11393439', '8837970', '12134689', '10074376', '10072814', '8546719', '12545628', '11582502', '7782188', '8724063', '9000626', '8558127', '9595626', '6448438', '6983751', '5509063', '4852188', '1878750', '1400000', '7215627', '0', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  },{
    label: 'Territory Points',
    data: ['72166142', '72841533', '81732870', '71976105', '79876570', '70740257', '76918671', '70680706', '71221528', '67278794', '75613666', '60773069', '66431517', '66131209', '70973083', '61018448', '73258017', '72675173', '59599083', '62240990', '57917572', '71753041', '61403685', '71632465', '61332453', '61630850', '71051639', '68124264', '67033488', '58081611', '61710361', '69231164', '60650616', '67010220', '51811686', '64656359', '66178982', '65741102', '53007925', '58860694', '58351527', '58774371', '53428397', '54966542', '46048126', '53082648', '47112417', '47262300', '52392258', '57858185', ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor:  'rgba(0, 0, 0, 1)',
    borderWidth: 1,
    hidden: true,
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;