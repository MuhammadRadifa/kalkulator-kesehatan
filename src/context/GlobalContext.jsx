import React, { createContext, useEffect, useRef, useState } from 'react';
import { BedSleep, BMI, EmojiOK, Hidration, Kafein, Kalkulator, KapsulVitammin, Relax, SadCry, Smoke } from '../assets';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [inputUserCalori, setInputUserCalori] = useState({
    umur: 18,
    tinggi: 160,
    berat: 50,
    gender: '',
    aktivitas: '',
    target: '',
  });

  const onChangeHandler = (event) => {
    setInputUserCalori({
      ...inputUserCalori,
      [event.target.name]: event.target.type == 'range' ? parseInt(event.target.value) : event.target.value,
    });
  };

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const twoDigits = (num) => String(num).padStart(2, '0');

  const handler = {
    onChangeHandler,
    useInterval,
    twoDigits,
  };

  const state = {
    inputUserCalori,
    setInputUserCalori,
  };

  const dataAplikasi = [
    {
      title: 'Kalkulator Kalori',
      desc: 'Kalkulator kalori kami adalah alat yang membantu Anda menghitung kebutuhan kalori harian Anda berdasarkan usia,tinggi, berat badan, dan tingkat aktivitas fisik. Dengan mengetahui kebutuhan kalori Anda, Anda dapat mengontrol asupan kalori Anda dan menjaga berat badan yang sehat.',
      path: '/kalkulator-kalori',
      icon: Kalkulator,
      color: 'border-orange-300',
    },
    {
      title: 'Kalkulator BMI',
      desc: 'Kalkulator BMI kami adalah alat yang membantu Anda mengukur indeks massa tubuh (BMI) Anda. BMI adalah ukuran yang digunakan untuk menentukan apakah berat badan Anda sehat untuk tinggi badan Anda.',
      path: '/kalkulator-bmi',
      icon: BMI,
      color: 'border-yellow-300',
    },
    {
      title: 'Kalkulator Hidrasi',
      desc: 'Kalkulator hidrasi kami membantu Anda memperkirakan jumlah air yang dibutuhkan setiap hari berdasarkan berat badan. Ini membantu menjaga keseimbangan elektrolit dan mencegah dehidrasi, serta meningkatkan kinerja organ dankesehatan secara keseluruhan.',
      path: '/kalkulator-hidrasi',
      icon: Hidration,
      color: 'border-sky-300',
    },
    {
      title: 'Kalkulator Kafein',
      desc: 'Kalkulator kafein adalah aplikasi yang membantu pengguna menghitung jumlah kafein yang mereka konsumsi dari minuman seperti kopi, teh, minuman energi, dan lain sebagainya.',
      path: '/kalkulator-kafein',
      icon: Kafein,
      color: 'border-green-300',
    },
    {
      title: 'Kalkulator Rokok',
      desc: 'Kalkulator rokok adalah alat yang digunakan untuk menghitung biaya atau pengeluaran yang terkait dengan kebiasaan merokok. Kalkulator semacam ini dapat membantu seseorang memperkirakan berapa banyak uang yang dihabiskan untuk membeli rokok selama periode tertentu dan berapa banyak uang yang dapat dihemat dengan menghentikan kebiasaan merokok.',
      path: '/kalkulator-rokok',
      icon: Smoke,
      color: 'border-indigo-300',
    },
    {
      title: 'Kalkulator Siklus Tidur',
      desc: 'Kalkulator siklus tidur adalah alat yang digunakan untuk membantu menghitung dan memantau pola tidur seseorang. Alat ini biasanya bekerja dengan mengumpulkan data dari pengguna tentang waktu tidur mereka, dan kemudian menggunakan algoritma untuk menganalisis data tersebut dan menghasilkan informasi tentang siklus tidur pengguna.',
      path: '/kalkulator-siklus-tidur',
      icon: BedSleep,
      color: 'border-violet-300',
    },
    {
      title: 'Kalkulator Kebahagiaan',
      desc: 'Kalkulator kebahagiaan adalah aplikasi yang dapat membantu Anda mengidentifikasi aspek kehidupan yang membawakebahagiaan dan memberikan saran untuk meningkatkan kualitas hidup Anda.',
      path: '/kalkulator-kebahagiaan',
      icon: EmojiOK,
      color: 'border-pink-300',
    },
    {
      title: 'Meditasi',
      desc: 'Membantu meningkatkan kesehatan mental: Meditasi adalah latihan mental yang dapat membantu mengurangi stres, kecemasan, dan depresi. Dengan aplikasi meditasi, Anda dapat melakukan latihan meditasi yang dapat membantu meningkatkan kesehatan mental dan emosional Anda.',
      path: '/meditasi',
      icon: Relax,
      color: 'border-lime-300',
    },
    {
      title: 'Kalkulator Vitamin',
      desc: 'Aplikasi ini dapat membantu pengguna untuk mengetahui kebutuhan vitamin harian mereka berdasarkan berat badan, tinggi, dan usia. Pengguna dapat menghitung kebutuhan vitamin tertentu seperti vitamin A, vitamin C, vitamin D, dan lainnya',
      path: '/kalkulator-vitamin',
      icon: KapsulVitammin,
      color: 'border-amber-300',
    },
    {
      title: 'Kalkulator Depresi',
      desc: 'Aplikasi kalkulator depresi dapat membantu mengukur tingkat depresi seseorang dengan mengajukan beberapa pertanyaan untuk mengevaluasi perasaan, perilaku, dan gejala-gejala yang terkait dengan depresi.',
      path: '/kalkulator-depresi',
      icon: SadCry,
      color: 'border-red-300',
    },
  ];

  return <GlobalContext.Provider value={{ state, handler, dataAplikasi }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
