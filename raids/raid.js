// setup 
const data = {
  labels: ['07/19/2023', '07/22/2023', '07/25/2023', '07/28/2023', '07/31/2023', '08/03/2023', '08/06/2023', '08/09/2023', '08/12/2023', '08/15/2023', '08/18/2023', '08/22/2023', '08/25/2023', '08/28/2023', '08/31/2023', '09/04/2023', '09/07/2023', '09/10/2023', '09/14/2023', '09/17/2023', '09/20/2023', '09/23/2023', '09/27/2023', '09/30/2023', '10/04/2023', '10/07/2023', '10/10/2023', '10/13/2023', '10/17/2023', '10/20/2023', '10/23/2023', ],
  datasets: [ {
    label: 'Guild Average - Score',
    data: ['2656151.1', '2683457.86', '2766582.0', '2761938.0', '2786030.76', '2921143.9', '2927875.5', '2695656.64', '2765787.18', '2696418.16', '2650775.16', '2607736.64', '2675737.897959184', '2634865.42', '2761568.4897959186', '2726386.8775510206', '2718728.28', '2777171.673469388', '2789903.8', '2789626.08', '2825687.9', '2752639.7', '2893965.102040816', '2789030.285714286', '2700892.2653061226', '2778042.78', '2772448.3673469387', '2842263.8571428573', '2911884.06122449', '2725415.6', '2779764.14', ],
    borderColor:  'rgb(0, 0, 0)',
    backgroundColor:  'rgb(0, 0, 0)',
    pointRadius: 10,
    hidden: false,
},
 {
    label: '90m Guild Crate',
    data: ['1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', ],
    borderColor:  'rgb(172, 211, 12)',
    backgroundColor:  'rgb(172, 211, 12)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: '130m Guild Crate',
    data: ['2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', '2600000.0', ],
    borderColor:  'rgb(105, 79, 253)',
    backgroundColor:  'rgb(105, 79, 253)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: '265m Guild Crate',
    data: ['5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', '5300000.0', ],
    borderColor:  'rgb(62, 251, 152)',
    backgroundColor:  'rgb(62, 251, 152)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'ArtVandalay',
    data: ['3250899.0', '3150976.0', '2081556.0', '3012449.0', '3222720.0', '3116124.0', '3050373.0', '1656024.0', '3150095.0', '1585938.0', '3213263.0', '1732374.0', '3008938.0', '3249836.0', '3133605.0', '3026793.0', '1918764.0', '2680707.0', '1762716.0', '2664447.0', '3231547.0', '3149350.0', '1614276.0', '2719179.0', '0.0', '3098595.0', '3181204.0', '3037702.0', '3177331.0', '3197898.0', '1711386.0', ],
    borderColor:  'rgb(189, 130, 150)',
    backgroundColor:  'rgb(189, 130, 150)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Avatany',
    data: ['1278386.0', '1078401.0', '1145802.0', '1338280.0', '0.0', '1340154.0', '1311022.0', '1356551.0', '1436540.0', '880186.0', '1401688.0', '1400450.0', '1377929.0', '1427135.0', '450000.0', '1435868.0', '1361167.0', '1311024.0', '1384959.0', '1284586.0', '1042723.0', '1233882.0', '1276807.0', '1034388.0', '1304156.0', '1114713.0', '1260737.0', '1374840.0', '1268367.0', '0.0', '1280015.0', ],
    borderColor:  'rgb(142, 164, 56)',
    backgroundColor:  'rgb(142, 164, 56)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Blattu',
    data: ['4752333.0', '4338597.0', '4270353.0', '4502333.0', '4169925.0', '4847612.0', '5050305.0', '4135737.0', '2700000.0', '4649553.0', '3551523.0', '3537966.0', '4645185.0', '4247028.0', '4532431.0', '4083858.0', '4748925.0', '3523944.0', '3457422.0', '4301292.0', '4275810.0', '4194384.0', '4356483.0', '4550538.0', '4350513.0', '4528222.0', '4287069.0', '4065231.0', '4430083.0', '4225623.0', '4068585.0', ],
    borderColor:  'rgb(92, 79, 237)',
    backgroundColor:  'rgb(92, 79, 237)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'BobaChuck91',
    data: ['1773065.0', '1784475.0', '1723694.0', '1843614.0', '0.0', '1749276.0', '1833461.0', '1903732.0', '1763486.0', '1818685.0', '1820194.0', '1734303.0', '1826538.0', '1828810.0', '1782919.0', '1856319.0', '1826827.0', '1751200.0', '1864133.0', '1859456.0', '1814100.0', '1824365.0', '1776317.0', '1944284.0', '1693513.0', '1825094.0', '1820438.0', '1752930.0', '1945859.0', '1775495.0', '1786777.0', ],
    borderColor:  'rgb(210, 24, 1)',
    backgroundColor:  'rgb(210, 24, 1)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'BobbyMarshal',
    data: ['450000.0', '781277.0', '2474678.0', '2136143.0', '2115352.0', '2301678.0', '2280850.0', '2205786.0', '2282526.0', '2416230.0', '2277159.0', '2175658.0', '0.0', '799682.0', '2156517.0', '2221288.0', '2227237.0', '1155729.0', '2716898.0', '2425712.0', '2270545.0', '2232443.0', '2442006.0', '2328569.0', '2278384.0', '2485130.0', '2472614.0', '2485028.0', '2249012.0', '2432565.0', '2216462.0', ],
    borderColor:  'rgb(233, 6, 9)',
    backgroundColor:  'rgb(233, 6, 9)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Chikiller',
    data: ['2949026.0', '2427111.0', '2748423.0', '2568787.0', '2761419.0', '2569885.0', '3142626.0', '1766144.0', '2541275.0', '2542062.0', '2546479.0', '2172145.0', '2422799.0', '2064852.0', '2879277.0', '1802310.0', '2891534.0', '2726140.0', '2362955.0', '2482416.0', '2962443.0', '2901020.0', '2955065.0', '2700000.0', '2952809.0', '2813768.0', '2343331.0', '2886066.0', '2813608.0', '2969624.0', '2669726.0', ],
    borderColor:  'rgb(130, 156, 186)',
    backgroundColor:  'rgb(130, 156, 186)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'DarthDax',
    data: ['2700000.0', '3750000.0', '4323391.0', '2700000.0', '3300000.0', '4324946.0', '4742428.0', '4040506.0', '4472335.0', '3448549.0', '3378823.0', '3378426.0', '3933436.0', '3240280.0', '4045218.0', '2564928.0', '4070395.0', '4147617.0', '4239267.0', '2876158.0', '4290861.0', '2838081.0', '2700000.0', '2333196.0', '4132894.0', '2435295.0', '3254605.0', '4028839.0', '2700000.0', '4177724.0', '3326828.0', ],
    borderColor:  'rgb(237, 151, 12)',
    backgroundColor:  'rgb(237, 151, 12)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Dava',
    data: ['0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '2785077.0', '2574359.0', '2656363.0', '2652694.0', '3160258.0', '3041715.0', '2969205.0', '3009302.0', '3010760.0', '2959821.0', '3077801.0', '3105479.0', '3091267.0', '3145302.0', '3122635.0', ],
    borderColor:  'rgb(100, 48, 207)',
    backgroundColor:  'rgb(100, 48, 207)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Delara Exibil',
    data: ['3683868.0', '3549146.0', '3697639.0', '3585710.0', '3750000.0', '3575286.0', '3678524.0', '3598915.0', '3750000.0', '3750000.0', '3677908.0', '3569676.0', '3512056.0', '3636996.0', '3648886.0', '3555934.0', '3747368.0', '3637816.0', '3709834.0', '3662558.0', '3698626.0', '3750000.0', '3737473.0', '3893715.0', '3979881.0', '3880533.0', '3758698.0', '3932055.0', '3909270.0', '3901146.0', '4003346.0', ],
    borderColor:  'rgb(231, 7, 64)',
    backgroundColor:  'rgb(231, 7, 64)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Dârth Jungle Asian',
    data: ['2957508.0', '2944605.0', '2794311.0', '2645155.0', '2943861.0', '2809077.0', '2709646.0', '2232612.0', '2973499.0', '3027741.0', '3045657.0', '2895153.0', '3019636.0', '3022965.0', '3031468.0', '3026190.0', '3123043.0', '3018444.0', '3060288.0', '2984574.0', '3105066.0', '3133179.0', '3106110.0', '3054690.0', '2934672.0', '3140701.0', '3067051.0', '3038730.0', '3112833.0', '3121030.0', '3156162.0', ],
    borderColor:  'rgb(247, 65, 36)',
    backgroundColor:  'rgb(247, 65, 36)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'El Jefe',
    data: ['3534374.0', '3736045.0', '3733295.0', '3797521.0', '3411729.0', '3862289.0', '3742399.0', '3733981.0', '3572163.0', '3543530.0', '3697994.0', '3402548.0', '3745380.0', '3247563.0', '3572510.0', '3331232.0', '3521709.0', '3522158.0', '3331131.0', '3597406.0', '3079650.0', '3037308.0', '3066054.0', '3009054.0', '3174885.0', '3033573.0', '3105831.0', '3046092.0', '3010131.0', '3372045.0', '3235036.0', ],
    borderColor:  'rgb(209, 218, 11)',
    backgroundColor:  'rgb(209, 218, 11)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Enigma',
    data: ['4919756.0', '5309768.0', '5186253.0', '5221548.0', '5167726.0', '5019721.0', '4901628.0', '5123971.0', '0.0', '5021108.0', '4993963.0', '4671732.0', '5019727.0', '5361561.0', '5341690.0', '5333541.0', '5229583.0', '0.0', '5179085.0', '5144026.0', '5256659.0', '5357505.0', '5313208.0', '5153053.0', '5370500.0', '5181226.0', '5229195.0', '5241265.0', '5077225.0', '5211227.0', '5164026.0', ],
    borderColor:  'rgb(218, 10, 167)',
    backgroundColor:  'rgb(218, 10, 167)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Excessive Fist',
    data: ['3272716.0', '2946860.0', '2612490.0', '3169135.0', '3080527.0', '3171546.0', '2403438.0', '3173467.0', '2485968.0', '2692104.0', '0.0', '2611260.0', '1989924.0', '2701485.0', '2768829.0', '1784031.0', '2335284.0', '2587924.0', '2497494.0', '3032703.0', '3216753.0', '2580003.0', '3064779.0', '1200000.0', '2600322.0', '2506806.0', '2612193.0', '2763795.0', '3045900.0', '1906278.0', '1965744.0', ],
    borderColor:  'rgb(65, 184, 144)',
    backgroundColor:  'rgb(65, 184, 144)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Fidget92',
    data: ['1778845.0', '1630155.0', '2040323.0', '1500000.0', '1722302.0', '2252513.0', '2291038.0', '1193084.0', '1500000.0', '1080744.0', '2037505.0', '1379352.0', '1921272.0', '1873327.0', '1379004.0', '1904463.0', '1477060.0', '1888853.0', '1442892.0', '1890123.0', '300000.0', '1779516.0', '1856977.0', '1702257.0', '1556550.0', '1047576.0', '0.0', '1023592.0', '1488980.0', '1319544.0', '1392140.0', ],
    borderColor:  'rgb(72, 238, 92)',
    backgroundColor:  'rgb(72, 238, 92)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'G4reth',
    data: ['3360853.0', '3258569.0', '3476646.0', '3217818.0', '3166630.0', '3326733.0', '3224408.0', '3336661.0', '3154863.0', '3323757.0', '3278522.0', '3288365.0', '3361444.0', '3405818.0', '3249405.0', '3432592.0', '3238113.0', '3234726.0', '3201449.0', '3281856.0', '3256789.0', '3183543.0', '3255939.0', '3303103.0', '3203245.0', '3203008.0', '3309537.0', '3149904.0', '3428156.0', '3315416.0', '3353384.0', ],
    borderColor:  'rgb(171, 185, 88)',
    backgroundColor:  'rgb(171, 185, 88)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Geralt of Rivia',
    data: ['1072753.0', '1108166.0', '912113.0', '910458.0', '924741.0', '991029.0', '914596.0', '968586.0', '1027697.0', '898475.0', '1055980.0', '1005075.0', '1003834.0', '975158.0', '901911.0', '1007576.0', '907490.0', '950281.0', '974764.0', '965499.0', '971268.0', '974252.0', '962445.0', '922805.0', '1025290.0', '963147.0', '968245.0', '955680.0', '947548.0', '998705.0', '921117.0', ],
    borderColor:  'rgb(120, 218, 234)',
    backgroundColor:  'rgb(120, 218, 234)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'JakeY',
    data: ['1772132.0', '1811958.0', '1825127.0', '1836451.0', '2107590.0', '2600123.0', '2513030.0', '2580016.0', '2515425.0', '2904438.0', '2887514.0', '2618304.0', '2954126.0', '2925171.0', '2814252.0', '2879794.0', '2669453.0', '2868788.0', '2816207.0', '2643934.0', '2680849.0', '2615153.0', '2740881.0', '2663530.0', '2608475.0', '2741130.0', '2696039.0', '2665685.0', '2722739.0', '2720428.0', '2708334.0', ],
    borderColor:  'rgb(142, 139, 252)',
    backgroundColor:  'rgb(142, 139, 252)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Javin Fis',
    data: ['2327797.0', '2288958.0', '2336494.0', '2343648.0', '2271217.0', '2275539.0', '2325919.0', '2474112.0', '2508027.0', '2396474.0', '2493597.0', '2509219.0', '2517024.0', '2458683.0', '2519033.0', '2550000.0', '2483617.0', '2391245.0', '2483216.0', '2550000.0', '2496149.0', '2490805.0', '2460831.0', '2537676.0', '2532749.0', '2497688.0', '2477855.0', '2468950.0', '2438109.0', '2424193.0', '2548582.0', ],
    borderColor:  'rgb(51, 178, 39)',
    backgroundColor:  'rgb(51, 178, 39)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Jay Maop',
    data: ['0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '1200000.0', '1627582.0', ],
    borderColor:  'rgb(130, 163, 207)',
    backgroundColor:  'rgb(130, 163, 207)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'JediAhsoka',
    data: ['1195519.0', '1277878.0', '1176975.0', '1199626.0', '1356426.0', '1518848.0', '1348800.0', '450000.0', '1265709.0', '1080735.0', '450000.0', '1108956.0', '1278450.0', '1268793.0', '628479.0', '450000.0', '1028190.0', '1136304.0', '850081.0', '1209787.0', '1265785.0', '505521.0', '1078695.0', '0.0', '443767.0', '1210807.0', '1138329.0', '1078245.0', '1241912.0', '1284454.0', '1274131.0', ],
    borderColor:  'rgb(150, 220, 193)',
    backgroundColor:  'rgb(150, 220, 193)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Jeeves',
    data: ['2898523.0', '2461077.0', '3170012.0', '2386744.0', '1852675.0', '3112690.0', '2875785.0', '2427762.0', '2053155.0', '1428366.0', '2483211.0', '2158770.0', '2223960.0', '2110992.0', '2882652.0', '3042976.0', '1659726.0', '2725930.0', '3176449.0', '2314569.0', '2616993.0', '3048246.0', '2021373.0', '3029205.0', '2695353.0', '2221833.0', '3182895.0', '2210475.0', '3197585.0', '2210616.0', '2369862.0', ],
    borderColor:  'rgb(29, 172, 32)',
    backgroundColor:  'rgb(29, 172, 32)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'JHang',
    data: ['2059157.0', '2185023.0', '2242313.0', '2145000.0', '2266801.0', '2339071.0', '2236153.0', '2450623.0', '2308354.0', '2509634.0', '1921333.0', '2272788.0', '0.0', '2248407.0', '1813022.0', '2240274.0', '2158415.0', '2203180.0', '2277076.0', '2178323.0', '2069781.0', '2353108.0', '2442576.0', '2182643.0', '2033396.0', '2521547.0', '2220594.0', '2269950.0', '2383017.0', '2381517.0', '3025131.0', ],
    borderColor:  'rgb(37, 194, 84)',
    backgroundColor:  'rgb(37, 194, 84)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Jonesmalones',
    data: ['4569504.0', '4192759.0', '4277524.0', '3945296.0', '5624198.0', '5597231.0', '5878697.0', '5796114.0', '5814215.0', '5837290.0', '3754712.0', '2700000.0', '2700000.0', '0.0', '2255868.0', '2655621.0', '2700000.0', '3674668.0', '5596408.0', '5099555.0', '3619623.0', '3879120.0', '4374981.0', '4103416.0', '4571967.0', '3816820.0', '4314753.0', '3684368.0', '3865177.0', '2700000.0', '2700000.0', ],
    borderColor:  'rgb(82, 235, 50)',
    backgroundColor:  'rgb(82, 235, 50)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Lambert',
    data: ['2171303.0', '2399322.0', '2164492.0', '2139896.0', '2430637.0', '2183478.0', '2211977.0', '2700755.0', '2729973.0', '2940080.0', '2752782.0', '2905743.0', '2891200.0', '3021114.0', '3030973.0', '3139761.0', '3107078.0', '3044013.0', '3067873.0', '2920591.0', '3063818.0', '3015454.0', '2927608.0', '3028684.0', '3099271.0', '2910229.0', '3073087.0', '2926277.0', '3069040.0', '3034337.0', '3018724.0', ],
    borderColor:  'rgb(178, 249, 206)',
    backgroundColor:  'rgb(178, 249, 206)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'manolis',
    data: ['2356194.0', '610704.0', '2271514.0', '2359748.0', '2239652.0', '2132982.0', '2443180.0', '1800000.0', '2419852.0', '0.0', '2368240.0', '2490344.0', '2526992.0', '2350000.0', '2386588.0', '2343328.0', '2423892.0', '2296028.0', '2360656.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '2135540.0', '1800000.0', '1800000.0', '1800000.0', '1800000.0', '1770438.0', '1689840.0', '1800000.0', ],
    borderColor:  'rgb(49, 126, 199)',
    backgroundColor:  'rgb(49, 126, 199)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Marl Jewel',
    data: ['2656470.0', '3300780.0', '3267503.0', '3255122.0', '3181882.0', '3241471.0', '3308194.0', '1800000.0', '3201893.0', '2999256.0', '2237436.0', '2902743.0', '2250000.0', '3026836.0', '3265321.0', '3220231.0', '2250000.0', '0.0', '3350590.0', '2671504.0', '3188674.0', '3179534.0', '3293578.0', '2068403.0', '2700000.0', '2957667.0', '1800000.0', '3289915.0', '2250000.0', '2657052.0', '1800000.0', ],
    borderColor:  'rgb(137, 85, 100)',
    backgroundColor:  'rgb(137, 85, 100)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'MINI DarthAzazel',
    data: ['4280096.0', '4216361.0', '4274309.0', '4532302.0', '4366916.0', '4238382.0', '4208054.0', '4336281.0', '3719598.0', '3915621.0', '2322801.0', '3835666.0', '4511392.0', '3918607.0', '3685778.0', '2698893.0', '4239852.0', '3870890.0', '4033995.0', '4052512.0', '4333912.0', '3818056.0', '4512228.0', '4411786.0', '3312336.0', '4239072.0', '3310681.0', '2700000.0', '4641299.0', '2623311.0', '4558099.0', ],
    borderColor:  'rgb(134, 103, 121)',
    backgroundColor:  'rgb(134, 103, 121)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Nomad',
    data: ['4213203.0', '4431966.0', '4348232.0', '4459299.0', '4442522.0', '4397963.0', '4373481.0', '2700000.0', '4451669.0', '4421915.0', '4428423.0', '4315890.0', '4484722.0', '4318514.0', '4378697.0', '4424853.0', '4485674.0', '4452978.0', '4376838.0', '4377220.0', '2700000.0', '4448292.0', '4491485.0', '4332696.0', '4390531.0', '4371214.0', '4505397.0', '4436664.0', '4438599.0', '4363108.0', '4293657.0', ],
    borderColor:  'rgb(75, 201, 233)',
    backgroundColor:  'rgb(75, 201, 233)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'non7top',
    data: ['1061464.0', '1036317.0', '1232722.0', '1154262.0', '1144874.0', '1552337.0', '1612738.0', '1328763.0', '2131214.0', '2119317.0', '2084426.0', '2023598.0', '1583865.0', '900000.0', '2176939.0', '1726518.0', '1765196.0', '1854563.0', '2284789.0', '2087728.0', '1496179.0', '1650000.0', '2114701.0', '2043116.0', '450000.0', '2453310.0', '2396231.0', '2327384.0', '2223109.0', '2281786.0', '2283708.0', ],
    borderColor:  'rgb(101, 5, 48)',
    backgroundColor:  'rgb(101, 5, 48)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'OwningXylophone',
    data: ['2111164.0', '2115031.0', '2024756.0', '2226724.0', '2282787.0', '2237772.0', '2200065.0', '2279587.0', '2416317.0', '2776660.0', '2613428.0', '2492425.0', '2686892.0', '2658743.0', '2843634.0', '3362619.0', '3269782.0', '3219011.0', '3436051.0', '3292550.0', '3766803.0', '3558445.0', '3516586.0', '2905048.0', '3458225.0', '3774871.0', '3777873.0', '3908885.0', '3874599.0', '3726706.0', '3570955.0', ],
    borderColor:  'rgb(43, 70, 231)',
    backgroundColor:  'rgb(43, 70, 231)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Patrick4',
    data: ['1089842.0', '2417500.0', '2138230.0', '2360955.0', '2215687.0', '2168071.0', '2390314.0', '2399160.0', '2201734.0', '2266138.0', '2300081.0', '2428391.0', '2298647.0', '2343817.0', '2373857.0', '2476946.0', '2308264.0', '2271141.0', '3153633.0', '2028829.0', '2883775.0', '2896190.0', '3210468.0', '3150361.0', '3178145.0', '3158735.0', '3153841.0', '2996636.0', '3152133.0', '3203212.0', '3113029.0', ],
    borderColor:  'rgb(206, 44, 74)',
    backgroundColor:  'rgb(206, 44, 74)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Puck',
    data: ['4226689.0', '4095655.0', '4255549.0', '4252999.0', '3150000.0', '4223581.0', '4207179.0', '2700000.0', '3150000.0', '2700000.0', '3525639.0', '3591787.0', '3450000.0', '3150000.0', '3150000.0', '3470329.0', '3150000.0', '3150000.0', '3150000.0', '3147061.0', '3150000.0', '3150000.0', '3123148.0', '3150000.0', '3150000.0', '3150000.0', '3490082.0', '3150000.0', '3150000.0', '3150000.0', '3150000.0', ],
    borderColor:  'rgb(29, 218, 86)',
    backgroundColor:  'rgb(29, 218, 86)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Q Ryker',
    data: ['1355309.0', '0.0', '1355811.0', '1369277.0', '1365003.0', '1341832.0', '1371194.0', '1197373.0', '1309242.0', '1200000.0', '1406852.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1200000.0', '1350000.0', '1350000.0', '1350000.0', '1350000.0', '1338444.0', '1350000.0', ],
    borderColor:  'rgb(102, 252, 5)',
    backgroundColor:  'rgb(102, 252, 5)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Rhil Margos',
    data: ['2603510.0', '2300382.0', '2386098.0', '2325130.0', '2315752.0', '2313407.0', '2245665.0', '2298045.0', '2353133.0', '2337473.0', '2260167.0', '2277850.0', '2269148.0', '2338849.0', '1200000.0', '2280363.0', '2372879.0', '2300944.0', '1200000.0', '1200000.0', '1200000.0', '2352490.0', '2345502.0', '2338152.0', '2343588.0', '2332000.0', '2463309.0', '1650000.0', '2347073.0', '2356490.0', '2329563.0', ],
    borderColor:  'rgb(209, 156, 122)',
    backgroundColor:  'rgb(209, 156, 122)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'RoTahn Taske',
    data: ['3469935.0', '3445346.0', '3365556.0', '3505314.0', '3537198.0', '3535791.0', '3595719.0', '3580609.0', '3244968.0', '3362923.0', '3103623.0', '3251418.0', '3305073.0', '3416214.0', '3566485.0', '1200000.0', '3308665.0', '3514917.0', '3387196.0', '3357751.0', '3441297.0', '3286059.0', '3413458.0', '3462627.0', '3416437.0', '3274998.0', '3391728.0', '3375051.0', '3326775.0', '3488997.0', '3495083.0', ],
    borderColor:  'rgb(89, 242, 6)',
    backgroundColor:  'rgb(89, 242, 6)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Scof',
    data: ['1403550.0', '1513632.0', '1569570.0', '1530588.0', '2066448.0', '1588020.0', '1789914.0', '1369212.0', '1675512.0', '1229556.0', '1218306.0', '1388646.0', '1253646.0', '1619712.0', '1368906.0', '1428048.0', '1399572.0', '1328166.0', '1401186.0', '1720783.0', '1359300.0', '1497468.0', '2095215.0', '1186476.0', '1365702.0', '1468350.0', '1733814.0', '1534450.0', '1311042.0', '1408872.0', '1442580.0', ],
    borderColor:  'rgb(176, 3, 44)',
    backgroundColor:  'rgb(176, 3, 44)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Skaar',
    data: ['2639368.0', '2640410.0', '2698959.0', '2993728.0', '3094066.0', '4389848.0', '4445692.0', '4601089.0', '4297789.0', '4505393.0', '4447494.0', '4585765.0', '4442753.0', '4624013.0', '4475068.0', '4447035.0', '4328227.0', '4524552.0', '4394735.0', '4361572.0', '4631729.0', '4293259.0', '4438103.0', '4509634.0', '4503422.0', '4489804.0', '4497534.0', '4417740.0', '4439386.0', '4279903.0', '4536236.0', ],
    borderColor:  'rgb(172, 197, 122)',
    backgroundColor:  'rgb(172, 197, 122)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Squanchy420',
    data: ['2572288.0', '2278679.0', '2548835.0', '2341528.0', '2100000.0', '2543462.0', '2531742.0', '2266800.0', '2100000.0', '2100000.0', '1200000.0', '2342006.0', '2301560.0', '2314734.0', '2320083.0', '2323835.0', '1605147.0', '2100000.0', '1643397.0', '1650000.0', '2321729.0', '2077837.0', '2235747.0', '2056945.0', '1650000.0', '1200000.0', '2300791.0', '2321075.0', '2362804.0', '0.0', '1200000.0', ],
    borderColor:  'rgb(189, 243, 137)',
    backgroundColor:  'rgb(189, 243, 137)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'T',
    data: ['3829181.0', '4159471.0', '3465376.0', '3897712.0', '4317618.0', '2700000.0', '4141329.0', '3228276.0', '4262448.0', '3307600.0', '3085719.0', '3753801.0', '2615598.0', '3147696.0', '2700000.0', '3691596.0', '3131622.0', '3966852.0', '2944686.0', '3524895.0', '2700000.0', '2700000.0', '3089044.0', '2700000.0', '3222534.0', '3311128.0', '3207648.0', '2700000.0', '2700000.0', '3130788.0', '2700000.0', ],
    borderColor:  'rgb(52, 138, 59)',
    backgroundColor:  'rgb(52, 138, 59)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Taco Hat',
    data: ['1498243.0', '1574260.0', '1823182.0', '1627566.0', '1677256.0', '1646392.0', '1775303.0', '1622414.0', '1713995.0', '1665050.0', '1753307.0', '1710703.0', '1311036.0', '0.0', '1575889.0', '1592523.0', '1627184.0', '1635357.0', '1588984.0', '384723.0', '1614060.0', '0.0', '1716389.0', '1504417.0', '1580210.0', '1599585.0', '1883174.0', '1873766.0', '1993722.0', '1929236.0', '1773408.0', ],
    borderColor:  'rgb(134, 132, 208)',
    backgroundColor:  'rgb(134, 132, 208)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Tani Mayse',
    data: ['2387251.0', '2311788.0', '2359134.0', '2372194.0', '2310193.0', '2344729.0', '2348940.0', '2351995.0', '2290144.0', '2318451.0', '2334375.0', '2258024.0', '2365190.0', '2385243.0', '2365243.0', '2369215.0', '2307828.0', '2427373.0', '2300292.0', '2512570.0', '2283806.0', '2352252.0', '2406024.0', '2306423.0', '2294800.0', '2337154.0', '2335927.0', '2342650.0', '2341242.0', '2341663.0', '2243410.0', ],
    borderColor:  'rgb(167, 243, 5)',
    backgroundColor:  'rgb(167, 243, 5)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Tranced',
    data: ['4379671.0', '4202358.0', '4454556.0', '4363075.0', '4303873.0', '4260667.0', '4351204.0', '4357119.0', '4363036.0', '4425771.0', '4589782.0', '4546671.0', '4448059.0', '4448310.0', '4709760.0', '4588797.0', '4599387.0', '4564218.0', '4324866.0', '4530582.0', '4431867.0', '4654089.0', '4632108.0', '4284732.0', '4650531.0', '4478775.0', '4683621.0', '4599426.0', '4427970.0', '4350114.0', '4389810.0', ],
    borderColor:  'rgb(251, 60, 126)',
    backgroundColor:  'rgb(251, 60, 126)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Trask droll',
    data: ['4744268.0', '5570214.0', '3695560.0', '3571868.0', '6019984.0', '4834880.0', '2700000.0', '4489328.0', '5357039.0', '3585032.0', '5443335.0', '2700000.0', '5581922.0', '5591824.0', '5757560.0', '5457642.0', '2700000.0', '6248691.0', '2700000.0', '4500000.0', '5823465.0', '2700000.0', '2700000.0', '6002154.0', '2700000.0', '3779319.0', '3489204.0', '2684322.0', '5386608.0', '3793398.0', '4875340.0', ],
    borderColor:  'rgb(158, 135, 219)',
    backgroundColor:  'rgb(158, 135, 219)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Tyrian',
    data: ['1078189.0', '1452129.0', '1374987.0', '1296637.0', '1392746.0', '1452518.0', '1373296.0', '1409147.0', '1440688.0', '1455565.0', '1229844.0', '1366285.0', '1432814.0', '1353664.0', '1443415.0', '600000.0', '1559580.0', '1402480.0', '778308.0', '1377033.0', '600000.0', '600000.0', '1078137.0', '0.0', '1588141.0', '1327006.0', '778065.0', '1483249.0', '300000.0', '300000.0', '1332412.0', ],
    borderColor:  'rgb(148, 51, 80)',
    backgroundColor:  'rgb(148, 51, 80)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Tyron Brandt',
    data: ['5267707.0', '5204850.0', '5371477.0', '5372349.0', '5270996.0', '5820204.0', '5136996.0', '5866655.0', '6186454.0', '5706551.0', '5451371.0', '5386616.0', '5546306.0', '5902381.0', '5550110.0', '5950274.0', '5678170.0', '5877916.0', '5823972.0', '6035303.0', '5977148.0', '5575741.0', '5728746.0', '5471534.0', '6073576.0', '5928156.0', '1106060.0', '5931376.0', '5683532.0', '6094168.0', '5867400.0', ],
    borderColor:  'rgb(199, 140, 45)',
    backgroundColor:  'rgb(199, 140, 45)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Unknown',
    data: ['0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '411193.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0', '935312.0', ],
    borderColor:  'rgb(233, 203, 70)',
    backgroundColor:  'rgb(233, 203, 70)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Verage Valoor',
    data: ['2386304.0', '2243958.0', '2269877.0', '2460633.0', '2521835.0', '2563257.0', '2932607.0', '2868024.0', '2946458.0', '3154995.0', '2286307.0', '3021905.0', '2963780.0', '3223783.0', '3059315.0', '3084976.0', '3129068.0', '3213868.0', '3105337.0', '3183045.0', '3128773.0', '3115192.0', '3184126.0', '3066351.0', '3127755.0', '3458388.0', '3042273.0', '3340233.0', '3080915.0', '3171980.0', '3401804.0', ],
    borderColor:  'rgb(44, 82, 178)',
    backgroundColor:  'rgb(44, 82, 178)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'WharfRat',
    data: ['1647947.0', '2508226.0', '2404163.0', '2704449.0', '3017373.0', '2712751.0', '3357496.0', '3152556.0', '3261481.0', '3167941.0', '2868988.0', '3068569.0', '3069686.0', '2930702.0', '3248232.0', '3378757.0', '2990254.0', '3106291.0', '3137125.0', '3438296.0', '4133703.0', '4782324.0', '4889740.0', '4077069.0', '4584436.0', '4695255.0', '4763350.0', '4558739.0', '4517902.0', '4377300.0', '4487446.0', ],
    borderColor:  'rgb(136, 255, 195)',
    backgroundColor:  'rgb(136, 255, 195)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'XCAL',
    data: ['4545051.0', '4395335.0', '5079314.0', '4946259.0', '4781830.0', '3000000.0', '4798182.0', '3824610.0', '4092930.0', '4074318.0', '4510089.0', '3418329.0', '4723627.0', '3664742.0', '4548027.0', '3550830.0', '3490116.0', '4738416.0', '3465060.0', '2700000.0', '3539688.0', '2976804.0', '4489668.0', '3845733.0', '2700000.0', '2700000.0', '5025113.0', '3381522.0', '4843314.0', '4624987.0', '4570066.0', ],
    borderColor:  'rgb(5, 255, 57)',
    backgroundColor:  'rgb(5, 255, 57)',
    pointRadius: 10,
    hidden: true,
},
 {
    label: 'Yosh',
    data: ['446614.0', '684101.0', '1029964.0', '1598782.0', '1349137.0', '1654664.0', '1411846.0', '1293603.0', '1255536.0', '1126965.0', '1188991.0', '900000.0', '1335591.0', '1299231.0', '1350000.0', '900000.0', '900000.0', '1561710.0', '1344534.0', '1825082.0', '1332391.0', '1350000.0', '900000.0', '1350000.0', '1350000.0', '1725568.0', '734865.0', '1733697.0', '1350000.0', '1885486.0', '843174.0', ],
    borderColor:  'rgb(33, 248, 33)',
    backgroundColor:  'rgb(33, 248, 33)',
    pointRadius: 10,
    hidden: true,
},
]

};

// config 
const config = {
  type: 'line',
  data,
  options: {
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            }
        },
	    plugins: {
			tooltip: {
				mode: 'index',
				intersect: false
		    },
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
