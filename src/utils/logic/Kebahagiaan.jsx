import { EmojiNormal, EmojiPuas, EmojiSangatPuas, EmojiSangatTidakPuas, EmojiTidakPuas } from '../../assets';

const Kebahagiaan = ({ state1, state2, state3, state4, state5 }) => {
  const skor = state1 + state2 + state3 + state4 + state5;
  let hasil = {};

  if (skor > 30) {
    hasil = {
      parameter: 'Sangat Puas',
      pesan:
        'Skor ini memberi tahu Anda bahwa Anda mencintai hidup Anda dan menganggapnya menyenangkan serta segala sesuatunya berjalan dengan baik untuk Anda.',
      image: EmojiSangatPuas,
    };
  } else if (skor > 25 && skor <= 30) {
    hasil = {
      parameter: 'Puas',
      pesan:
        'Anda menyukai hidup Anda dan menemukan bahwa sebagian besar bidang kehidupan Anda berjalan dengan sangat baik untuk Anda.',
      image: EmojiPuas,
    };
  } else if (skor > 20 && skor <= 25) {
    hasil = {
      parameter: 'Sedikit Puas',
      pesan:
        'Ini adalah skor rata-rata. Anda secara umum puas dengan kehidupan Anda, namun ada beberapa area yang perlu ditingkatkan. Anda ingin naik ke tingkat yang lebih tinggi dengan melakukan perubahan dalam hidup.',
      image: EmojiPuas,
    };
  } else if (skor == 20) {
    hasil = {
      parameter: 'Netral',
      pesan:
        'Ini adalah skor rata-rata. Anda secara umum puas dengan kehidupan Anda, namun ada beberapa area yang perlu ditingkatkan. Anda ingin naik ke tingkat yang lebih tinggi dengan melakukan perubahan dalam hidup.',
      image: EmojiNormal,
    };
  } else if (skor >= 15 && skor < 20) {
    hasil = {
      parameter: 'Sedikit Tidak Puas',
      pesan:
        'Anda memiliki masalah kecil namun signifikan dalam beberapa bidang kehidupan. Atau, banyak bidang kehidupan Anda yang berjalan dengan baik, namun ada satu bidang yang memiliki masalah besar. Harapan yang moderat dan perubahan hidup dapat membantu menyelesaikan masalah.',
      image: EmojiTidakPuas,
    };
  } else if (skor >= 10 && skor < 15) {
    hasil = {
      parameter: 'Tidak Puas',
      pesan:
        'Anda sangat tidak puas. Ada banyak area dalam hidup Anda yang bermasalah atau satu atau dua area dalam hidup Anda yang berjalan sangat buruk. Diperlukan perubahan dalam sikap, pola pikir, dan aktivitas kehidupan. Ketidakbahagiaan dapat menjadi penghalang untuk berfungsi secara normal, oleh karena itu konseling dapat membantu.',
      image: EmojiTidakPuas,
    };
  } else {
    hasil = {
      parameter: 'Sangat Tidak Puas',
      pesan:
        'Anda secara substansial tidak bahagia dengan kehidupan Anda saat ini. Kehilangan orang yang dicintai, pengangguran, kecanduan alkohol, atau kecanduan bisa menjadi alasannya. Anda perlu mencari bantuan profesional.',
      image: EmojiSangatTidakPuas,
    };
  }

  return { hasil, skor };
};

export default Kebahagiaan;
