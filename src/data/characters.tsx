import { SelectedCharType } from "@/lib/DetailType";

const characters : {
  proverb: SelectedCharType[];
  Pond: SelectedCharType[];
} = {
     proverb : [ 
        {
        id: 1,
        char : "ក",
        advice : "កុំបង្អង់ពេលវេលា ពេលវេលាដែលបាត់ទៅ មិនអាចយកត្រឡប់បានទេ",
        sound : "../../sounds/kh-1.wav",
        excemple : "ក្លាហាន",
        color : "#DC2222"
    },
      {
        id: 2,
        char : "ខ",
        advice : "ខំរស់ដោយមានគោលបំណង នឹងមិនងាយរំខានដោយរឿងតូចតាច",
          excemple : "ខិតខំ",
          sound : "../../sounds/kh-2.wav",
          color : "#DC2222"
    },
      {
        id: 3,
        char : "គ",
         excemple : "គំនិតច្នៃប្រឌិត",
        advice : "គួរតែអនុវត្តអ្វីតិចៗរៀងរាល់ថ្ងៃ ដើម្បីឲ្យក្លាយជាធំ",
        color : "#FAC91A",
         sound : "../../sounds/kh-3.wav"
    },
      {
        id: 4,
        char : "ឃ",
         excemple : "ឃ្លាត",
        advice : "ឃ្លាតពីការខ្ជិល ព្រោះវាគឺជាឧបសគ្គធំបំផុតនៃជោគជ័យ",
         color : "#FAC91A",
         sound : "../../sounds/kh-4.wav"
    },
      {
        id: 5,
        char : "ង",
         excemple : "ងងឹត",
        advice : "ងងឹតមិនអាចរំខានដល់ពន្លឺបានទេ",
         color : "#FAC91A",
         sound : "../../sounds/kh-5.wav"
    },
      {
        id: 6,
        char : "ច",
        excemple : "ចិត្តមាំមួន",
         advice: "ចេះអត់ធ្មត់ នឹងឈ្នះគ្រប់ការលំបាក",
         color : "#DC2222",
         sound : "../../sounds/kh-6.wav"
    },
      {
        id: 7,
        char : "ឆ",
        color : "#DC2222",
         excemple : "ឆ្លាតវៃ",
         advice : "ឆ្លាតវៃគឺជាឧបករណ៍ដ៏ល្អបំផុត សម្រាប់ជោគជ័យ",
         sound : "../../sounds/kh-7.wav"
    },
      {
        id: 8,
        char : "ជ",
        advice : "ជឿជាក់លើខ្លួនឯង គឺជាគន្លឹះដ៏សំខាន់បំផុតនៃជោគជ័យ",
         excemple : "ជោគជ័យ",
          color : "#FAC91A",
         sound : "../../sounds/kh-8.wav"
    },
      {
        id: 9,
        char : "ឈ",
        excemple : "ឈ្នះ",
         sound : "../../sounds/kh-9.wav",
          color : "#FAC91A",
          advice : "ឈ្នះដោយសុចរិត គឺជាការគោរពខ្លួនឯង និងគោរពអ្នកដទៃ",
    },
      {
        id: 10,
        char : "ញ",
        excemple : "ញញឹម",
         color : "#FAC91A",
         sound : "../../sounds/kh-10.wav",
          advice : "ញញឹមសប្បាយ ជួយឲ្យមានសុខភាពល្អ និងជួយបង្កើនអារម្មណ៍វិជ្ជមាន",
    },
      {
        id: 11,
        char : "ដ",
       excemple : "ដំណើរ",
       advice: "ដំណើរទៅរកជោគជ័យ គឺចាប់ផ្តើមពីជំហានតូចៗ",
        color : "#DC2222",
         sound : "../../sounds/kh-11.wav"
    },
      {
        id: 12,
        char : "ឋ",
         excemple : "ឋានៈ",
        advice : "ឋានៈមិនមែនជារឿងសំខាន់បំផុតទេ តែការគោរពខ្លួនឯង និងគោរពអ្នកដទៃ គឺសំខាន់ជាង",
        color : "#DC2222",
         sound : "../../sounds/kh-12.wav"
    },
      {
        id: 13,
        char : "ឌ",
        advice : "ឌីជីថលគឺជាឧបករណ៍ដ៏មានប្រយោជន៍ សម្រាប់ការស្វែងរកចំណេះដឹង និងការទំនាក់ទំនង",
         excemple: "ឌីជីថល",
          color : "#FAC91A",
         sound : "../../sounds/kh-13.wav"
    },
      {
        id: 14,
        char : "ឍ",
        advice : "ឍីបនៃចិត្ត គឺជាឧបករណ៍ដ៏មានតម្លៃសម្រាប់ការគិតពិចារណា និងការសម្រេចចិត្ត",
        excemple : "ឍីប",
         color : "#FAC91A",
         sound : "../../sounds/kh-14.wav"
    },
      {
        id: 15,
        char : "ណ",
        advice : "ណែនាំខ្លួនឯងឲ្យទៅរកគោលបំណង និងសុភមង្គល",
        color : "#DC2222",
         excemple : "ណែនាំ",
         sound : "../../sounds/kh-15.wav"
    },
      {
        id: 16,
        char : "ត",
        advice : "ត្រូវមានការគោរពខ្លួនឯង និងគោរពអ្នកដទៃ ដើម្បីបង្កើតសង្គមដែលសុខសាន្ត",
        color : "#DC2222",
         sound : "../../sounds/kh-16.wav",
        excemple: "តម្លៃ",
    },
      {
        id: 17,
        char : "ថ",
        advice : "ថែរក្សាសុខភាព និងចិត្តវិជ្ជមាន ដើម្បីរស់នៅយូរអង្វែង",
         excemple: "ថែរក្សា",
         color : "#DC2222",
         sound : "../../sounds/kh-17.wav"
    },
      {
        id: 18,
         advice : "ទឹកចិត្តជួយឲ្យមានកម្លាំងក្នុងការប្រឈមមុខនឹងអ្វីៗ",
        char : "ទ",
         color : "#FAC91A",
        excemple : "ទឹក",
         sound : "../../sounds/kh-18.wav"
    },
      {
        id: 19,
        char : "ធ",
         excemple : "ធនធាន",
         color : "#FAC91A",
        advice : "ធ្វើការអោយខ្លាំង ដើម្បីសម្រេចបានគោលបំណង",
         sound : "../../sounds/kh-19.wav"
    },
      {
        id: 20,
        char : "ន",
        excemple : "នឹកស្រមៃ",
        advice : "នឹកស្រមៃអ្វីដែលល្អៗ សម្រាប់ជីវិត",
         color : "#FAC91A",
         sound : "../../sounds/kh-20.wav"
    },
      {
        id: 21,
        char : "ប",
         excemple : "ប្តូរ",
         color : "#DC2222",
        advice : "បើកចិត្តទទួលយកការផ្លាស់ប្តូរ ដើម្បីអភិវឌ្ឍន៍ខ្លួនឯង",
         sound : "../../sounds/kh-21.wav"
    },
      {
        id: 22,
        char : "ផ",
         excemple : "ផ្លូវ",
         color : "#DC2222",
        advice : "ផ្តើមដំណើរទៅរកគោលបំណង ដោយជំហានតូចៗ",
         sound : "../../sounds/kh-22.wav"
    },
      {
        id: 23,
        char : "ព",
         excemple : "ព្យាយាម",
          color : "#FAC91A",
        advice : "ព្យាយាមមិនឲ្យចាញ់ គឺជាគន្លឹះដ៏សំខាន់នៃជោគជ័យ",
         sound : "../../sounds/kh-23.wav"
    },
      {
        id: 24,
        char : "ភ",
         excemple : "ភ្លេច",
        advice : "ភ្លេចពីអតីតកាលដើម្បីផ្តោតលើបច្ចុប្បន្ន និងអនាគត",
         color : "#FAC91A",
         sound : "../../sounds/kh-24.wav"
    },
      {
        id: 25,
        char : "ម",
        advice : "មនុស្សគួរតែមានការគោរពខ្លួនឯង និងគោរពអ្នកដទៃ",
         color : "#FAC91A",
         excemple : "មនុស្ស",
         sound : "../../sounds/kh-25.wav"
    },
      {
        id: 26,
        char : "យ",
        advice : "យកចិត្តទុកដាក់លើអ្វីដែលអ្នកធ្វើ ដើម្បីឲ្យបានល្អបំផុត",
         excemple : "យកចិត្តទុកដាក់",
         color : "#FAC91A",
         sound : "../../sounds/kh-26.wav"
    },
      {
        id: 27,
        char : "រ",
        excemple : "រៀន",
        advice : "រៀនពីកំហុសរបស់ខ្លួន ដើម្បីកែលម្អខ្លួនឯង",
         color : "#FAC91A",
         sound : "../../sounds/kh-27.wav"
    },
      {
        id: 28,
        char : "ល",
         excemple : "លទ្ធផល",
         color : "#FAC91A",
        advice : "លទ្ធផលនៃការខំប្រឹងប្រែង គឺជារឿងដែលមានតម្លៃបំផុត",
         sound : "../../sounds/kh-28.wav"
    },
      {
        id: 29,
        char : "វ",
        advice : "វិន័យនាំឱ្យមានភាពជោគជ័យ",
         color : "#FAC91A",
        excemple : "វិន័យ",
         sound : "../../sounds/kh-29.wav"
    },
      {
        id: 30,
        char : "ស",
        color : "#DC2222",
         excemple : "ស្មោះត្រង់",
        advice : "ស្មោះត្រង់ជាមួយខ្លួនឯង និងអ្នកដទៃ គឺជាគន្លឹះដ៏សំខាន់នៃជោគជ័យ",
         sound : "../../sounds/kh-30.wav"
    },
      {
        id: 31,
        char : "ហ",
         advice : "ហ៊ានធ្វើអ្វីដែលអ្នកចង់ធ្វើ",
        excemple : "ហ៊ាន",
        color : "#DC2222",
         sound : "../../sounds/kh-31.wav"
    },
      {
        id: 32,
        char : "ឡ",
         advice : "ឡើងពីការបរាជ័យ ដើម្បីទៅរកជោគជ័យ",
         color : "#DC2222",
        excemple : "ឡើង",
         sound : "../../sounds/kh-32.wav"
    },
      {
        id: 33,
        char : "អ",
         advice : "អនុវត្តអ្វីដែលអ្នកបានរៀន ដើម្បីកែលម្អខ្លួនឯង",
        excemple : "អនុវត្ត",
         sound : "../../sounds/kh-33.wav",
         color : "#DC2222"
    },
],
   Pond : [
   {
      id : 1,
      char : "ា",
        sound : "",
          color : "#5178BD",
   },
   {
      id : 2,
      char  : "ិ",
        sound : "",
          color : "#5178BD",
   },
   {
      id : 3,
        sound : "",
          color : "#5178BD",
      char  : "ី"
   },
   {
      id : 4,
      char  : "ឹ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 5,
      char  : "ឺ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 6,
      char  : "ុ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 7,
      char : "ូ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 8,
      char : "ួ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 9,
      char  : "ើ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 10,
      char  : "ឿ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 11,
      char  : "ៀ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 12,
      char  : "េ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 13,
      char : "ែ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 14,
      char : "ៃ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 15,
      char : "ោ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 16,
      char : "ៅ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 17,
      char : "ុំ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 18,
      char : "ំ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 19,
      char  : "ាំ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 20,
      char : "ះ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 21,
      char : "ុះ",
        color : "#5178BD",
        sound : "",
   },
   {
      id : 22,
      char : "េះ",
      color : "#5178BD",
        sound : "",
   },
   {
      id : 23,
      char : "ោះ",
        color : "#5178BD",
        sound : ""

   },
]  
};


 


export default characters;