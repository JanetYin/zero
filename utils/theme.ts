import type { Theme } from '@/type'
import Ayaka from '@/assets/images/Vertin.png'
import Beelzebul from '@/assets/images/Night.jpg'
import Ganyu from '@/assets/images/voyager2.jpg'
import Hutao from '@/assets/images/Qu2.jpg'
// import Keqing from '@/assets/images/keqing.jpg'
import Kokomi from '@/assets/images/kaalaa3.jpg'
import Nahida from '@/assets/images/Spring.jpg'
import Nilou from '@/assets/images/37.jpg'
import Yoimiya from '@/assets/images/Sonetto.jpg'

const themeList: Theme[] = [
  {
    type: 'Hutao',
    name: '朔日手记',
    description: 'Notes on Shuòrì',
    color: {
      primary: '#E06458',
      background: '#FCFAF2',
    },
    image: Hutao,
    url: 'https://www.bilibili.com/video/BV1tT4y187zp/',
  },
  {
    type: 'Nahida',
    name: '春风有信',
    description: 'Moonlight Grows',
    color: {
      primary: '#7EA08A',
      background: '#F3F7F2',
    },
    image: Nahida,
    url: 'https://www.bilibili.com/video/BV1Kw411F79h/',
  },
  // {
  //   type: 'Keqing',
  //   name: '霆霓快雨',
  //   description: '千帆齐聚之城',
  //   color: {
  //     primary: '#827595',
  //     background: '#E6E3F6',
  //   },
  //   image: Keqing,
  //   url: 'https://www.bilibili.com/video/BV14K4y1Q7PH/',
  // },
  {
    type: 'Nilou',
    name: '具象之外',
    description: 'Transcends All Matters',
    color: {
      primary: '#74B5DB',
      background: '#DBEAF1',
    },
    image: Nilou,
    url: 'https://www.bilibili.com/video/BV1sh4y1z7JB/',
  },

  {
    type: 'Ganyu',
    name: '遥远来客',
    description: 'Galaxy On The Strings',
    color: {
      primary: '#5260A6',
      background: '#E2E5F5',
    },
    image: Ganyu,
    url: 'https://www.bilibili.com/video/BV1Uy4y1c78E/',
  },
  {
    type: 'Kokomi',
    name: '交于坠星',
    description: 'पंख की ओर यात्रा मोर',
    color: {
      primary: '#BF9997',
      background: '#F2E1DC',
    },
    image: Kokomi,
    url: 'https://www.bilibili.com/video/BV1z34y1K7s9/',
  },

  {
    type: 'Ayaka',
    name: '行至日暮',
    description: 'Cantabile',
    color: {
      primary: '#8996B2',
      background: '#D8E2EC',
    },
    image: Ayaka,
    url: 'https://www.bilibili.com/video/BV1Ea4y157HT/',
  },
  {
    type: 'Yoimiya',
    name: '诗篇以外',
    description: 'Beyond Poems',
    color: {
      primary: '#C15C42',
      background: '#F3E8DB',
    },
    image: Yoimiya,
    url: 'https://www.bilibili.com/video/BV1BV4y1C7tJ/',
  },
  {
    type: 'Beelzebul',
    name: '心向天灯',
    description: 'E lucevan le stelle',
    color: {
      primary: '#8C78B0',
      background: '#E3DBED',
    },
    image: Beelzebul,
    url: 'https://www.bilibili.com/video/BV1nF4m1j7MR/',
  },
]

export default themeList
