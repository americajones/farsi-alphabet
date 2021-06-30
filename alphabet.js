const alphabet = {
    "ا": {
        "name": "alef",
        "english": "ah",
        "sounds-like": "'ā' and initial vowels 'a', 'e' and 'o'",
        "initial": "ا",
        "middle": "ــا",
        "final": "ــا",
        "sound-clip": "./assets/sounds/alef.mp3"
    },
    "ب": {
        "name": "be",
        "english": "b",
        "sounds-like": "b",
        "initial": "بــ",
        "middle": "ــبــ",
        "final": "ــب",
        "sound-clip": "./assets/sounds/be.mp3"
    },
    "پ": {
        "name": "pe",
        "english": "p",
        "sounds-like": "p",
        "initial": "پــ",
        "middle": "ــپــ",
        "final": "ــپ",
        "sound-clip": "./assets/sounds/pe.mp3"
    },
    "ت": {
        "name": "te",
        "english": "t",
        "sounds-like": "t",
        "initial": "تــ",
        "middle": "ــتــ",
        "final": "ــت",
        "sound-clip": "./assets/sounds/te.mp3"
    },
    "ث": {
        "name": "se",
        "english": "",
        "sounds-like": "s, th",
        "initial": "ثــ",
        "middle": "ـثــ",
        "final": "ــث",
        "sound-clip": "./assets/sounds/se.mp3"
    },
    "ج": {
        "name": "jim",
        "english": "j",
        "sounds-like": "j",
        "initial": "جــ",
        "middle": "ـجــ",
        "final": "ــج",
        "sound-clip": "./assets/sounds/jim.mp3"
    },
    "چ": {
        "name": "che",
        "english": "ch",
        "sounds-like": "ch",
        "initial": "چــ",
        "middle": "ــچــ",
        "final": "ــچ",
        "sound-clip": "./assets/sounds/che.mp3"
    },
    "ح": {
        "name": "he",
        "english": "h",
        "sounds-like": "soft h",
        "initial": "حــ",
        "middle": "ــحــ",
        "final": "ــح",
        "sound-clip": "./assets/sounds/he.mp3"
    },
    "خ": {
        "name": "khe",
        "english": "",
        "sounds-like": "rough H",
        "initial": "خــ",
        "middle": "ــخــ",
        "final": "ــخ",
        "sound-clip": "./assets/sounds/khe.mp3"
    },
    "د": {
        "name": "dal",
        "english": "d",
        "sounds-like": "d",
        "initial": "د",
        "middle": "ــد",
        "final": "ــد",
        "sound-clip": "./assets/sounds/dal.mp3"
    },
    "ذ": {
        "name": "zal",
        "english": "z",
        "sounds-like": "z",
        "initial": "ذ",
        "middle": "ــذ",
        "final": "ــذ",
        "sound-clip": "./assets/sounds/zal.mp3"
    },
    "ر": {
        "name": "re",
        "english": "r",
        "sounds-like": "rolled r",
        "initial": "ر",
        "middle": "ــر",
        "final": "ــر",
        "sound-clip": "./assets/sounds/re.mp3"
    },
    "ز": {
        "name": "ze",
        "english": "z",
        "sounds-like": "z",
        "initial": "ز",
        "middle": "ــز",
        "final": "ــز",
        "sound-clip": "./assets/sounds/ze.mp3"
    },
    "ژ": {
        "name": "zhe",
        "english": "zh",
        "sounds-like": "meaSUre",
        "initial": "ژ",
        "middle": "ــژ",
        "final": "ــژ",
        "sound-clip": "./assets/sounds/zhe.mp3"
    },
    "س": {
        "name": "sin",
        "english": "s",
        "sounds-like": "s",
        "initial": "ســ",
        "middle": "ــســ",
        "final": "ــس",
        "sound-clip": "./assets/sounds/sin.mp3"
    },
    "ش": {
        "name": "shin",
        "english": "sh",
        "sounds-like": "sh",
        "initial": "شــ",
        "middle": "ــشــ",
        "final": "ــش",
        "sound-clip": "./assets/sounds/shin.mp3"
    },
    "ص": {
        "name": "sād",
        "english": "s",
        "sounds-like": "s",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/sad.mp3"
    },
    "ض": {
        "name": "zād",
        "english": "z",
        "sounds-like": "z",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/zad.mp3"
    },
    "ط": {
        "name": "tā",
        "english": "t",
        "sounds-like": "t",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/ta.mp3"
    },
    "ظ": {
        "name": "zā",
        "english": "z",
        "sounds-like": "z",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/za.mp3"
    },
    "ع": {
        "name": "‘ain",
        "english": "",
        "sounds-like": "ae",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/ain.mp3"
    },
    "غ": {
        "name": "ghain",
        "english": "",
        "sounds-like": "",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/ghain.mp3"
    },
    "ف": {
        "name": "fe",
        "english": "",
        "sounds-like": "",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/fe.mp3"
    },
    "ق": {
        "name": "qāf",
        "english": "",
        "sounds-like": "deep in mouth k or g",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/qaf.mp3"
    },
    "ک": {
        "name": "kāf",
        "english": "k",
        "sounds-like": "ch?",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/kaf.mp3"
    },
    "گ": {
        "name": "gāf",
        "english": "",
        "sounds-like": "g",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/gaf.mp3"
    },
    "ل": {
        "name": "lām",
        "english": "",
        "sounds-like": "",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/lam.mp3"
    },
    "م": {
        "name": "mim",
        "english": "",
        "sounds-like": "m",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/mim.mp3"
    },
    "ن": {
        "name": "nun",
        "english": "",
        "sounds-like": "n",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/nun.mp3"
    },
    "و": {
        "name": "vāv",
        "english": "",
        "sounds-like": "v",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/vav.mp3"
    },
    "ه": {
        "name": "he",
        "english": "",
        "sounds-like": "h",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/heh.mp3"
    },
    "ی": {
        "name": "ye",
        "english": "",
        "sounds-like": "y",
        "initial": "",
        "middle": "",
        "final": "",
        "sound-clip": "./assets/sounds/ye.mp3"
    }
}