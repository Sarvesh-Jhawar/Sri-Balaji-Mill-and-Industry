import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      divisions: 'Divisions',
      process: 'Process',
      quality: 'Quality',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    home: {
      welcome: 'Welcome',
      chooseDivision: 'Choose a division to continue',
      divisions: {
        oilMill: 'Sri Balaji Oil Mill',
        oilMillDesc: 'Castor oil, cotton seed oil and bio-products',
        industries: 'Sri Balaji Industries',
        industriesDesc: 'Ginning, pressing and premium lint cotton'
      },
      contactSales: 'Contact Sales'
    },
    viewLocation: 'View location',
    buttons: {
      explore: 'Explore'
    },
    about: {
      whoWeAre: 'Who We Are',
      title: 'Legacy of Excellence',
      subtitle: 'Sri Balaji Group has been a trusted leader in agro-processing and cotton manufacturing for over two decades. Rooted in tradition yet driven by modern technology, we are committed to delivering excellence.',
      mission: 'Our Mission',
      missionDesc: 'To produce high-quality agro and textile products that meet global standards while ensuring sustainable practices and empowering robust rural livelihoods.',
      vision: 'Our Vision',
      visionDesc: 'To be a globally recognized leader in the agro-manufacturing industry, known for innovation, integrity, and our commitment to quality and the environment.',
      infra: 'World-Class Infrastructure',
      infraDesc: 'Powered by advanced technology and skilled workforce.',
      sustainability: 'Sustainability',
      susTitle: 'Growth that Gives Back',
      susDesc: 'At Sri Balaji Group, we believe in growth that gives back to nature. Our manufacturing processes are designed to minimize waste and maximize resource efficiency.'
    },
    contact: {
      getInTouch: 'Get In Touch',
      title: 'Contact Us',
      subtitle: "We'd love to hear from you. Reach out for any inquiries.",
      factoryAddr: 'Factory Address'
    },
    divisions: {
      title: 'Our Divisions',
      subtitle: 'Manufacturing excellence across Oil, Seeds, and Cotton sectors.',
      oilMill: {
        title: 'Sri Balaji Oil Mill',
        desc: 'Excellence in Edible Oils & Agro Seeds'
      },
      industries: {
        title: 'Balaji Industries',
        desc: 'Premium Cotton Ginning & Pressing'
      },
      products: {
        castor: {
          name: 'Castor Seed Oil',
          desc: 'High-purity castor oil extracted from premium seeds.',
          details: 'Our Castor Oil is produced using cold-press technology to retain maximum nutritional value and purity. Ideal for industrial applications, pharmaceuticals, and cosmetics.',
          specs: ['Purity: 99.9%', 'Acid Value: < 2.0', 'Moisture: < 0.25%']
        },
        cotton: {
          name: 'Cotton Seed Oil',
          desc: 'Refined edible oil known for its neutral flavor.',
          details: 'Extracted from the finest cotton seeds, our oil undergoes a rigorous refining process to ensure safety and quality for culinary use.',
          specs: ['Type: Refined', 'Color: Light Yellow', 'Free Fatty Acid: < 0.1%']
        },
        groundnut: {
          name: 'Groundnut Seed',
          desc: 'Graded export-quality groundnuts.',
          details: 'We process and grade groundnuts based on size and quality (HPS). Our seeds are carefully sorted to meet international export standards.',
          specs: ['Sizes: 40/50, 50/60, 60/70', 'Moisture: < 7%', 'Admixture: < 1%']
        },
        briquettes: {
          name: 'Biofuel Briquettes',
          desc: 'Eco-friendly fuel made from groundnut husk.',
          details: 'A sustainable alternative to coal and wood. Our briquettes have high calorific value and low ash content, making them efficient for industrial boilers.',
          specs: ['Calorific Value: > 4000 kcal/kg', 'Ash: < 5%', 'Moisture: < 10%']
        },
        maize: {
          name: 'Maize Powder',
          desc: 'Nutritious feed for animals.',
          details: 'High-quality maize powder processed for optimal animal nutrition. Rich in carbohydrates and essential nutrients.',
          specs: ['Protein: > 9%', 'Fiber: < 3%', 'Fat: > 3.5%']
        },
        ginning: {
          name: 'Ginned Cotton',
          desc: 'Separating cotton fibers from seeds with precision.',
          details: 'Our modern ginning units ensure minimal fiber damage and maximum cleaning, resulting in superior quality cotton lint.',
          specs: ['Length: 28mm+', 'Mic: 3.5-4.9', 'Strength: 28+ GPT']
        },
        lint: {
          name: 'Lint Cotton',
          desc: 'Pure cotton producing without seeds.',
          details: 'High-grade lint cotton ready for spinning. We supply to major textile mills across the region.',
          specs: ['Trash: < 3%', 'Moisture: < 8.5%', 'Grade: S-6 / Shankar-6']
        }
      },
      btnView: 'View Details',
      btnClose: 'Close Details',
      modalDesc: 'Description',
      modalSpecs: 'Specifications'
    },
    quality: {
      tag: 'Quality Assurance',
      title: 'Uncompromising Standards',
      subtitle: 'Precision, Purity, and Perfection in every product.',
      promiseTitle: 'Our Quality Promise',
      promiseDesc: 'We follow strict quality control protocols at every stage of production, using advanced laboratory equipment to ensure our exports meet global specifications.',
      features: {
        lab: { title: 'In-house Laboratory', desc: 'Advanced moisture and purity testing equipment.' },
        sorting: { title: 'Automated Sorting', desc: 'Color sorting machines for zero-defect output.' },
        hygiene: { title: 'Hygienic Processing', desc: 'Sterile environment for food-grade safety.' },
        audits: { title: 'Regular Audits', desc: 'Frequent machinery and process compliance checks.' }
      },
      certTitle: 'Certifications & Recognitions',
      certs: {
        iso: { title: 'Premium Quality', sub: 'Guaranteed' },
        fssai: { title: '100% Pure', sub: 'Natural & Healthy' },
        govt: { title: 'Industry Leaders', sub: 'Best Practices' },
        star: { title: 'Customer Choice', sub: 'Trusted Brand' }
      }
    },
    process: {
      tag: 'Manufacturing',
      title: 'The Art of Processing',
      subtitle: 'Precision engineering meets traditional care.',
      groundnutTitle: 'Groundnut Processing',
      cottonTitle: 'Cotton Ginning Process',
      steps: {
        procurement: { title: 'Procurement', desc: 'Sourcing rich groundnuts directly from trusted farming networks.' },
        cleaning: { title: 'Cleaning', desc: 'Advanced destoning and cleaning to remove all impurities.' },
        sorting: { title: 'Sorting', desc: 'Optical color sorting technology for uniform quality.' },
        grading: { title: 'Size Grading', desc: 'Precision grading (counts 40/50, 50/60) to meet export specs.' },
        packing: { title: 'Packing', desc: 'Hygienic vacuum or jute packing as per requirement.' },
        dispatch: { title: 'Dispatch', desc: 'Final quality checks before global shipment.' },
        arrival: { title: 'Arrival & Grading', desc: 'Moisture analysis and manual grading upon arrival.' },
        preClean: { title: 'Pre-Cleaning', desc: 'Removal of leaves and stems before ginning begins.' },
        ginning: { title: 'Ginning', desc: 'High-speed roller ginning separating lint from seed.' },
        pressing: { title: 'Pressing', desc: 'Hydraulic pressing into standard export-quality bales.' },
        baling: { title: 'Baling', desc: 'Secure baling with protective cotton cloth covers.' }
      },
      btnClose: 'Close'
    },
    disclaimer: {
      title: 'Disclaimer',
      text: 'Images used on this website are for representation purposes only and may be sourced from the internet. All rights belong to their respective owners.'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      divisions: 'विभाग',
      process: 'प्रक्रिया',
      quality: 'गुणवत्ता',
      gallery: 'गैलरी',
      contact: 'संपर्क'
    },
    home: {
      welcome: 'स्वागत है',
      chooseDivision: 'जारी रखने के लिए एक विभाग चुनें',
      divisions: {
        oilMill: 'श्री बालाजी ऑयल मिल',
        oilMillDesc: 'कास्टोर तेल, कॉटन सीड तेल और बायो-उत्पाद',
        industries: 'श्री बालाजी इंडस्ट्रीज',
        industriesDesc: 'जिन्निंग, प्रेसिंग और प्रीमियम लिंट कॉटन'
      },
      contactSales: 'संपर्क बिक्री'
    },
    viewLocation: 'स्थान देखें',
    buttons: {
      explore: 'खोजें'
    },
    about: {
      whoWeAre: 'हम कौन हैं',
      title: 'उत्कृष्टता की विरासत',
      subtitle: 'श्री बालाजी ग्रुप दो दशकों से अधिक समय से एग्रो-प्रोसेसिंग और कॉटन निर्माण में एक भरोसेमंद लीडर रहा है। परंपरा से जुड़े और आधुनिक तकनीक से प्रेरित, हम उत्कृष्टता देने के लिए प्रतिबद्ध हैं।',
      mission: 'हमारा मिशन',
      missionDesc: 'वैश्विक मानकों को पूरा करने वाले उच्च गुणवत्ता वाले कृषि और कपड़ा उत्पादों का उत्पादन करना, साथ ही स्थायी प्रथाओं को सुनिश्चित करना और ग्रामीण आजीविका को सशक्त बनाना।',
      vision: 'हमारा विजन',
      visionDesc: 'एग्रो-मैन्युफैक्चरिंग उद्योग में एक विश्व स्तर पर मान्यता प्राप्त लीडर बनना, जो नवाचार, अखंडता और गुणवत्ता और पर्यावरण के प्रति हमारी प्रतिबद्धता के लिए जाना जाता है।',
      infra: 'विश्व स्तरीय बुनियादी ढांचा',
      infraDesc: 'उन्नत तकनीक और कुशल कार्यबल द्वारा संचालित।',
      sustainability: 'स्थिरता',
      susTitle: 'वह विकास जो वापस देता है',
      susDesc: 'श्री बालाजी ग्रुप में, हम उस विकास में विश्वास करते हैं जो प्रकृति को वापस देता है। हमारी विनिर्माण प्रक्रियाएं कचरे को कम करने और संसाधन दक्षता को अधिकतम करने के लिए डिज़ाइन की गई हैं।'
    },
    contact: {
      getInTouch: 'संपर्क करें',
      title: 'हमसे संपर्क करें',
      subtitle: 'हमें आपसे सुनना अच्छा लगेगा। किसी भी पूछताछ के लिए संपर्क करें।',
      factoryAddr: 'फैक्ट्री का पता'
    },
    divisions: {
      title: 'हमारे विभाग',
      subtitle: 'तेल, बीज और कपास क्षेत्रों में विनिर्माण उत्कृष्टता।',
      oilMill: {
        title: 'श्री बालाजी ऑयल मिल',
        desc: 'खाद्य तेलों और कृषि बीजों में उत्कृष्टता'
      },
      industries: {
        title: 'बालाजी इंडस्ट्रीज',
        desc: 'प्रीमियम कॉटन गिनिंग और प्रेसिंग'
      },
      products: {
        castor: {
          name: 'अरंडी का तेल',
          desc: 'प्रीमियम बीजों से निकाला गया उच्च शुद्धता वाला अरंडी का तेल।',
          details: 'हमारा अरंडी का तेल कोल्ड-प्रेस तकनीक का उपयोग करके उत्पादित किया जाता है ताकि अधिकतम पोषक मूल्य और शुद्धता बनी रहे। औद्योगिक अनुप्रयोगों, फार्मास्यूटिकल्स और सौंदर्य प्रसाधनों के लिए आदर्श।',
          specs: ['शुद्धता: 99.9%', 'एसिड मान: < 2.0', 'नमी: < 0.25%']
        },
        cotton: {
          name: 'बिनौला तेल',
          desc: 'अपने तटस्थ स्वाद के लिए जाना जाने वाला रिफाइंड खाद्य तेल।',
          details: 'बेहतरीन कपास के बीजों से निकाला गया, हमारा तेल पाक उपयोग के लिए सुरक्षा और गुणवत्ता सुनिश्चित करने के लिए एक कठोर शोधन प्रक्रिया से गुजरता है।',
          specs: ['प्रकार: रिफाइंड', 'रंग: हल्का पीला', 'फ्री फैटी एसिड: < 0.1%']
        },
        groundnut: {
          name: 'मूंगफली बीज',
          desc: 'ग्रेडेड निर्यात गुणवत्ता वाली मूंगफली।',
          details: 'हम आकार और गुणवत्ता (HPS) के आधार पर मूंगफली को संसाधित और ग्रेड करते हैं। हमारे बीज अंतरराष्ट्रीय निर्यात मानकों को पूरा करने के लिए सावधानीपूर्वक छांटे जाते हैं।',
          specs: ['आकार: 40/50, 50/60, 60/70', 'नमी: < 7%', 'मिश्रण: < 1%']
        },
        briquettes: {
          name: 'बायोफ्यूल ब्रिकेट्स',
          desc: 'मूंगफली के छिलके से बना पर्यावरण के अनुकूल ईंधन।',
          details: 'कोयले और लकड़ी का एक स्थायी विकल्प। हमारे ब्रिकेट्स में उच्च कैलोरी मान और कम राख सामग्री होती है, जो उन्हें औद्योगिक बॉयलरों के लिए कुशल बनाती है।',
          specs: ['कैलोरी मान: > 4000 kcal/kg', 'राख: < 5%', 'नमी: < 10%']
        },
        maize: {
          name: 'मक्का पाउडर',
          desc: 'जानवरों के लिए पौष्टिक चारा।',
          details: 'इष्टतम पशु पोषण के लिए संसाधित उच्च गुणवत्ता वाला मक्का पाउडर। कार्बोहाइड्रेट और आवश्यक पोषक तत्वों से भरपूर।',
          specs: ['प्रोटीन: > 9%', 'फाइबर: < 3%', 'वसा: > 3.5%']
        },
        ginning: {
          name: 'गिन्नीड कपास',
          desc: 'कपास के रेशों को बीजों से सटीकता के साथ अलग करना।',
          details: 'हमारी आधुनिक जिनिंग इकाइयाँ न्यूनतम फाइबर क्षति और अधिकतम सफाई सुनिश्चित करती हैं, जिसके परिणामस्वरूप बेहतर गुणवत्ता वाला लिंट कॉटन मिलता है।',
          specs: ['लंबाई: 28mm+', 'माइक: 3.5-4.9', 'ताकत: 28+ GPT']
        },
        lint: {
          name: 'लिंट कॉटन',
          desc: 'बीजों के बिना शुद्ध कपास का उत्पादन।',
          details: 'कताई के लिए तैयार उच्च-ग्रेड लिंट कॉटन। हम पूरे क्षेत्र में प्रमुख कपड़ा मिलों को आपूर्ति करते हैं।',
          specs: ['कचरा: < 3%', 'नमी: < 8.5%', 'ग्रेड: S-6 / शंकर-6']
        }
      },
      btnView: 'विवरण देखें',
      btnClose: 'विवरण बंद करें',
      modalDesc: 'विवरण',
      modalSpecs: 'विनिर्देश'
    },
    quality: {
      tag: 'गुणवत्ता आश्वासन',
      title: 'समझौता न करने वाले मानक',
      subtitle: 'हर उत्पाद में सटीकता, शुद्धता और पूर्णता।',
      promiseTitle: 'हमारा गुणवत्ता वादा',
      promiseDesc: 'हम उत्पादन के हर चरण में सख्त गुणवत्ता नियंत्रण प्रोटोकॉल का पालन करते हैं, ताकि यह सुनिश्चित किया जा सके कि हमारे निर्यात वैश्विक विनिर्देशों को पूरा करते हैं।',
      features: {
        lab: { title: 'इन-हाउस प्रयोगशाला', desc: 'उन्नत नमी और शुद्धता परीक्षण उपकरण।' },
        sorting: { title: 'स्वचालित छंटाई', desc: 'शून्य-दोष आउटपुट के लिए रंग छंटाई मशीनें।' },
        hygiene: { title: 'स्वच्छ प्रसंस्करण', desc: 'खाद्य-ग्रेड सुरक्षा के लिए बाँझ वातावरण।' },
        audits: { title: 'नियमित ऑडिट', desc: 'लगातार मशीनरी और प्रक्रिया अनुपालन जाँच।' }
      },
      certTitle: 'प्रमाणपत्र और मान्यताएं',
      certs: {
        iso: { title: 'उत्तम गुणवत्ता', sub: 'गारंटीकृत' },
        fssai: { title: '१००% शुद्ध', sub: 'प्राकृतिक और स्वस्थ' },
        govt: { title: 'उद्योग में अग्रणी', sub: 'सर्वोत्तम प्रथाएं' },
        star: { title: 'ग्राहकों की पसंद', sub: 'विश्वसनीय ब्रांड' }
      }
    },
    process: {
      tag: 'विनिर्माण',
      title: 'प्रसंस्करण की कला',
      subtitle: 'सटीक इंजीनियरिंग पारंपरिक देखभाल से मिलती है।',
      groundnutTitle: 'मूंगफली प्रसंस्करण',
      cottonTitle: 'कपास गिनिंग प्रक्रिया',
      steps: {
        procurement: { title: 'खरीद', desc: 'भरोसेमंद खेती नेटवर्क से सीधे समृद्ध मूंगफली की सोर्सिंग।' },
        cleaning: { title: 'सफाई', desc: 'सभी अशुद्धियों को दूर करने के लिए उन्नत डिस्टोनिंग और सफाई।' },
        sorting: { title: 'छंटाई', desc: 'समान गुणवत्ता के लिए ऑप्टिकल रंग छंटाई तकनीक।' },
        grading: { title: 'आकार ग्रेडिंग', desc: 'निर्यात चश्मे को पूरा करने के लिए सटीक ग्रेडिंग (40/50, 50/60)।' },
        packing: { title: 'पैकिंग', desc: 'आवश्यकतानुसार स्वच्छ वैक्यूम या जूट पैकिंग।' },
        dispatch: { title: 'प्रेषण', desc: 'वैश्विक शिपमेंट से पहले अंतिम गुणवत्ता जाँच।' },
        arrival: { title: 'आगमन और ग्रेडिंग', desc: 'आगमन पर नमी विश्लेषण और मैनुअल ग्रेडिंग।' },
        preClean: { title: 'पूर्व-सफाई', desc: 'गिनिंग शुरू होने से पहले पत्तियों और तनों को हटाना।' },
        ginning: { title: 'गिनिंग', desc: 'लिंट को बीज से अलग करने वाली हाई-स्पीड रोलर गिनिंग।' },
        pressing: { title: 'प्रेसिंग', desc: 'मानक निर्यात-गुणवत्ता वाली गांठों में हाइड्रोलिक प्रेसिंग।' },
        baling: { title: 'बेलिंग', desc: 'सुरक्षात्मक सूती कपड़े के कवर के साथ सुरक्षित बेलिंग।' }
      },
      btnClose: 'बंद करें'
    },
    disclaimer: {
      title: 'अस्वीकरण',
      text: 'इस वेबसाइट पर उपयोग की गई छवियां केवल प्रतिनिधित्व के उद्देश्यों के लिए हैं और इंटरनेट से ली जा सकती हैं। सभी अधिकार उनके संबंधित स्वामियों के हैं।'
    }
  },
  te: {
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      divisions: 'విభాగాలు',
      process: 'ప్రక్రియ',
      quality: 'నాణ్యత',
      gallery: 'గ్యాలరీ',
      contact: 'తడానికి'
    },
    home: {
      welcome: 'స్వాగతం',
      chooseDivision: 'కొత్తదాన్ని కొనసాగడానికి ఒక విభాగాన్ని ఎంచుకోండి',
      divisions: {
        oilMill: 'శ్రీ బాలాజీ ఆయిల్ మిల్',
        oilMillDesc: 'కాస్టర్ ఆయిల్, కాటన్ సీడ్ ఆయిల్ మరియు బయో ఉత్పత్తులు',
        industries: 'శ్రీ బాలాజీ ఇండస్ట్రీస్',
        industriesDesc: 'జిన్నింగ్, ప్రెస్సింగ్ మరియు ప్రీమియం లింట్ కాటన్'
      },
      contactSales: 'స్పర్శ విక్రయం'
    },
    viewLocation: 'స్థానాన్ని చూడండి',
    buttons: {
      explore: 'అన్వేషించండి'
    },
    about: {
      whoWeAre: 'మమ్మల్ని గురించి',
      title: 'శ్రేష్ఠత యొక్క వారసత్వం',
      subtitle: 'శ్రీ బాలాజీ గ్రూప్ రెండు దశాబ్దాలుగా వ్యవసాయం మరియు పత్తి తయారీలో విశ్వసనీయమైన నాయకుడు. సాంప్రదాయంతో ముడిపడి ఉన్నప్పటికీ ఆధునిక సాంకేతిక పరిజ్ఞానంతో నడిచే మేము శ్రేష్ఠతను అందించడానికి కట్టుబడి ఉన్నాము.',
      mission: 'మా లక్ష్యం',
      missionDesc: 'ప్రపంచ ప్రమాణాలకు అనుగుణంగా అధిక-నాణ్యత గల వ్యవసాయ మరియు వస్త్ర ఉత్పత్తుల ఉత్పత్తి, సుస్థిర పద్ధతులను నిర్ధారిస్తూ మరియు గ్రామీణ జీవనోపాధిని బలోపేతం చేయడం.',
      vision: 'మా దృష్టి',
      visionDesc: 'వ్యవసాయ తయారీ పరిశ్రమలో ప్రపంచవ్యాప్తంగా గుర్తింపు పొందిన నాయకుడిగా మారడం, ఆవిష్కరణ, చిత్తశుద్ధి మరియు నాణ్యత మరియు పర్యావరణం పట్ల మా నిబద్ధతకు ప్రసిద్ధి.',
      infra: 'ప్రపంచ స్థాయి మౌలిక సదుపాయాలు',
      infraDesc: 'అధునాతన సాంకేతికత మరియు నైపుణ్యం కలిగిన సిబ్బందితో.',
      sustainability: 'సుస్థిరత',
      susTitle: 'తిరిగి ఇచ్చే వృద్ధి',
      susDesc: 'శ్రీ బాలాజీ గ్రూప్‌లో, మేము ప్రకృతికి తిరిగి ఇవ్వగల వృద్ధిని నమ్ముతాము. మా తయారీ ప్రక్రియలు వ్యర్థాలను తగ్గించడానికి మరియు వనరుల సామర్థ్యాన్ని పెంచడానికి రూపొందించబడ్డాయి.'
    },
    contact: {
      getInTouch: 'మమ్మల్ని సంప్రదించండి',
      title: 'మమ్మల్ని సంప్రదించండి',
      subtitle: 'మీ నుండి వినడం మాకు సంతోషం. ఏవైనా విచారణల కోసం సంప్రదించండి.',
      factoryAddr: 'ఫ్యాక్టరీ చిరునామా'
    },
    divisions: {
      title: 'మా విభాగాలు',
      subtitle: 'నూనె, విత్తనాలు మరియు పత్తి రంగాలలో తయారీ శ్రేష్ఠత.',
      oilMill: {
        title: 'శ్రీ బాలాజీ ఆయిల్ మిల్',
        desc: 'తినే నూనెలు & వ్యవసాయ విత్తనాలలో శ్రేష్ఠత'
      },
      industries: {
        title: 'బాలాజీ ఇండస్ట్రీస్',
        desc: 'ప్రీమియం కాటన్ జిన్నింగ్ & ప్రెస్సింగ్'
      },
      products: {
        castor: {
          name: 'ఆముదము నూనె',
          desc: 'ప్రీమియం విత్తనాల నుండి సేకరించిన అధిక స్వచ్ఛత గల ఆముదము నూనె.',
          details: 'మా కాస్టర్ ఆయిల్ గరిష్ట పోషక విలువ మరియు స్వచ్ఛతను నిలుపుకోవడానికి కోల్డ్-ప్రెస్ టెక్నాలజీని ఉపయోగించి ఉత్పత్తి చేయబడుతుంది. పారిశ్రామిక అనువర్తనాలు, ఫార్మాస్యూటికల్స్ మరియు సౌందర్య సాధనాలకు ఆదర్శం.',
          specs: ['స్వచ్ఛత: 99.9%', 'యాసిడ్ విలువ: < 2.0', 'తేమ: < 0.25%']
        },
        cotton: {
          name: 'పత్తి గింజల నూనె',
          desc: 'తటస్థ రుచికి ప్రసిద్ధి చెందిన శుద్ధి చేసిన వంట నూనె.',
          details: 'అత్యుత్తమ పత్తి గింజల నుండి సేకరించిన మా నూనె, వంటగది ఉపయోగానికి భద్రత మరియు నాణ్యతను నిర్ధారించడానికి కఠినమైన శుద్ధి ప్రక్రియకు లోనవుతుంది.',
          specs: ['రకం: శుద్ధి చేసినది', 'రంగు: లేత పసుపు', 'ఫ్రీ ఫ్యాటీ యాసిడ్: < 0.1%']
        },
        groundnut: {
          name: 'వేరుశెనగ విత్తనం',
          desc: 'గ్రేడెడ్ ఎగుమతి నాణ్యత గల వేరుశెనగలు.',
          details: 'మేము పరిమాణం మరియు నాణ్యత (HPS) ఆధారంగా వేరుశెనగలను ప్రాసెస్ చేసి గ్రేడ్ చేస్తాము. అంతర్జాతీయ ఎగుమతి ప్రమాణాలకు అనుగుణంగా మా విత్తనాలు జాగ్రత్తగా వేరు చేయబడతాయి.',
          specs: ['సైజులు: 40/50, 50/60, 60/70', 'తేమ: < 7%', 'మిశ్రమం: < 1%']
        },
        briquettes: {
          name: 'బయోఫ్యూయల్ బ్రికెట్స్',
          desc: 'వేరుశెనగ పొట్టుతో తయారు చేసిన పర్యావరణ అనుకూల ఇంధనం.',
          details: 'బొగ్గు మరియు చెక్కకు సుస్థిర ప్రత్యామ్నాయం. మా బ్రికెట్లు అధిక కేలరీ విలువ మరియు తక్కువ బూడిదను కలిగి ఉంటాయి, ఇవి పారిశ్రామిక బాయిలర్లకు సమర్థవంతంగా పనిచేస్తాయి.',
          specs: ['కేలరీ విలువ: > 4000 kcal/kg', 'బూడిద: < 5%', 'తేమ: < 10%']
        },
        maize: {
          name: 'మొక్కజొన్న పొడి',
          desc: 'జంతువులకు పోషకమైన మేత.',
          details: 'సరైన జంతు పోషణ కోసం ప్రాసెస్ చేయబడిన అధిక-నాణ్యత మొక్కజొన్న పొడి. కార్బోహైడ్రేట్లు మరియు అవసరమైన పోషకాలతో సమృద్ధిగా ఉంటుంది.',
          specs: ['ప్రోటీన్: > 9%', 'ఫైబర్: < 3%', 'కొవ్వు: > 3.5%']
        },
        ginning: {
          name: 'జిన్నెడ్ కాటన్',
          desc: 'విత్తనాల నుండి పత్తి నూలును ఖచ్చితత్వంతో వేరు చేయడం.',
          details: 'మా ఆధునిక జిన్నింగ్ యూనిట్లు కనిష్ట ఫైబర్ నష్టం మరియు గరిష్ట శుభ్రతను నిర్ధారిస్తాయి, దీని ఫలితంగా అత్యుత్తమ నాణ్యత గల కాటన్ లింట్ లభిస్తుంది.',
          specs: ['పొడవు: 28mm+', 'మైక్: 3.5-4.9', 'బలం: 28+ GPT']
        },
        lint: {
          name: 'లింట్ కాటన్',
          desc: 'విత్తనాలు లేకుండా స్వచ్ఛమైన పత్తిని ఉత్పత్తి చేయడం.',
          details: 'స్పిన్నింగ్ కోసం సిద్ధంగా ఉన్న హై-గ్రేడ్ లింట్ కాటన్. మేము ప్రాంతం అంతటా ఉన్న ప్రధాన టెక్స్టైల్ మిల్లులకు సరఫరా చేస్తాము.',
          specs: ['చెత్త: < 3%', 'తేమ: < 8.5%', 'గ్రేడ్: S-6 / శంకర్-6']
        }
      },
      btnView: 'వివరాలు చూడండి',
      btnClose: 'వివరాలు మూసివేయండి',
      modalDesc: 'వివరణ',
      modalSpecs: 'స్పెసిఫికేషన్స్'
    },
    quality: {
      tag: 'నాణ్యత హామీ',
      title: 'రాజీపడని ప్రమాణాలు',
      subtitle: 'ప్రతి ఉత్పత్తిలో ఖచ్చితత్వం, స్వచ్ఛత మరియు పరిపూర్ణత.',
      promiseTitle: 'మా నాణ్యతా వాగ్దానం',
      promiseDesc: 'మా ఎగుమతులు ప్రపంచ స్పెసిఫికేషన్లకు అనుగుణంగా ఉండేలా చూడడానికి అధునాతన ప్రయోగశాల పరికరాలను ఉపయోగిస్తూ, ఉత్పత్తి యొక్క ప్రతి దశలోనూ మేము కఠినమైన నాణ్యత నియంత్రణ ప్రోటోకాల్‌లను అనుసరిస్తాము.',
      features: {
        lab: { title: 'ఇన్-హౌస్ లాబొరేటరీ', desc: 'అధునాతన తేమ మరియు స్వచ్ఛత పరీక్ష పరికరాలు.' },
        sorting: { title: 'ఆటోమేటెడ్ సార్టింగ్', desc: 'సున్నా లోపం అవుట్‌పుట్ కోసం రంగు సార్టింగ్ యంత్రాలు.' },
        hygiene: { title: 'పరిశుభ్రమైన ప్రాసెసింగ్', desc: 'ఆహార-గ్రేడ్ భద్రత కోసం శుభ్రమైన వాతావరణం.' },
        audits: { title: 'సాధారణ ఆడిట్లు', desc: 'తరచుగా యంత్రాలు మరియు ప్రక్రియ సమ్మతి తనిఖీలు.' }
      },
      certTitle: 'ధృవపత్రాలు & గుర్తింపులు',
      certs: {
        iso: { title: 'అత్యుత్తమ నాణ్యత', sub: 'హామీ ఇవ్వబడింది' },
        fssai: { title: '100% స్వచ్ఛమైనది', sub: 'సహజమైన & ఆరోగ్యకరమైన' },
        govt: { title: 'పరిశ్రమ నాయకులు', sub: 'ఉత్తమ పద్ధతులు' },
        star: { title: 'కస్టమర్ ఎంపిక', sub: 'నమ్మదగిన బ్రాండ్' }
      }
    },
    process: {
      tag: 'తయారీ',
      title: 'ప్రాసెసింగ్ కళ',
      subtitle: 'ఖచ్చితమైన ఇంజనీరింగ్ సాంప్రదాయ సంరక్షణతో కలుస్తుంది.',
      groundnutTitle: 'వేరుశెనగ ప్రాసెసింగ్',
      cottonTitle: 'కాటన్ జిన్నింగ్ ప్రాసెస్',
      steps: {
        procurement: { title: 'సేకరణ', desc: 'విశ్వసనీయ వ్యవసాయ నెట్‌వర్క్‌ల నుండి నేరుగా రిచ్ వేరుశెనగలను సోర్సింగ్ చేయడం.' },
        cleaning: { title: 'శుభ్రపరచడం', desc: 'అన్ని మలినాలను తొలగించడానికి అధునాతన డీస్టోనింగ్ మరియు క్లీనింగ్.' },
        sorting: { title: 'సార్టింగ్', desc: 'ఏకరీతి నాణ్యత కోసం ఆప్టికల్ కలర్ సార్టింగ్ టెక్నాలజీ.' },
        grading: { title: 'సైజు గ్రేడింగ్', desc: 'ఎగుమతి స్పెక్స్‌కు అనుగుణంగా ఖచ్చితమైన గ్రేడింగ్ (కౌంట్స్ 40/50, 50/60).' },
        packing: { title: 'ప్యాకింగ్', desc: 'అవసరానికి అనుగుణంగా హైజీనిక్ వాక్యూమ్ లేదా జూట్ ప్యాకింగ్.' },
        dispatch: { title: 'డిస్పాచ్', desc: 'గ్లోబల్ షిప్‌మెంట్‌కు ముందు తుది నాణ్యత తనిఖీలు.' },
        arrival: { title: 'రాక & గ్రేడింగ్', desc: 'రాకపై తేమ విశ్లేషణ మరియు మాన్యువల్ గ్రేడింగ్.' },
        preClean: { title: 'ప్రీ-క్లీనింగ్', desc: 'జిన్నింగ్ ప్రారంభమయ్యే ముందు ఆకులు మరియు కాండాలను తొలగించడం.' },
        ginning: { title: 'జిన్నింగ్', desc: 'విత్తనం నుండి లింట్‌ను వేరుచేసే హై-స్పీడ్ రోలర్ జిన్నింగ్.' },
        pressing: { title: 'ప్రెస్సింగ్', desc: 'ప్రామాణిక ఎగుమతి-నాణ్యత బేల్స్‌గా హైడ్రాలిక్ ప్రెస్సింగ్.' },
        baling: { title: 'బేలింగ్', desc: 'రక్షణ కాటన్ వస్త్ర కవర్లతో సురక్షితమైన బేలింగ్.' }
      },
      btnClose: 'మూసివేయండి'
    },
    disclaimer: {
      title: 'నిరాకరణ',
      text: 'ఈ వెబ్‌సైట్‌లో ఉపయోగించిన చిత్రాలు ప్రాతినిధ్య ప్రయోజనాల కోసం మాత్రమే మరియు ఇంటర్నెట్ నుండి సేకరించబడవచ్చు. అన్ని హక్కులు వారి సంబంధిత యజమానులకు చెందుతాయి.'
    }
  }
};

export function useTranslation() {
  const { language, setLanguage } = useContext(LanguageContext);

  const langCode = (() => {
    if (!language) return 'en';
    if (language === 'English' || language === 'en') return 'en';
    if (language === 'Telugu' || language === 'te') return 'te';
    if (language === 'Hindi' || language === 'hi') return 'hi';
    return 'en';
  })();

  const t = (path) => {
    if (!path) return '';
    const parts = path.split('.');
    let cur = translations[langCode];
    for (const p of parts) {
      if (!cur) return path;
      cur = cur[p];
    }
    return cur ?? path;
  };

  return { t, langCode, language, setLanguage };
}

export default translations;
