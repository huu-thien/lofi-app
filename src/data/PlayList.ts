import { PlaylistType } from "@/shared/types";

// Lofi Viet Nam
import HenEmOLanYeuThu2 from "@/assets/audio/chill_lyric/HenEmLanYeuThu2.mp3";
import SauNhungLanDau from "@/assets/audio/chill_lyric/SauNhungLanDau.mp3";
import SuytNuathi from "@/assets/audio/chill_lyric/SuytNuaThi.mp3";

// Lofi Không Lời
import WhereIgo from "@/assets/audio/chill_no_lyric/gerardomillanenochwhereverigo.mp3";
import WalkingOnClouds from "@/assets/audio/chill_no_lyric/WalkingOnClouds.mp3";
import LeapOfFraith from "@/assets/audio/chill_no_lyric/LeapOfFaith.mp3";
import WhispersInTheMist from "@/assets/audio/chill_no_lyric/WhispersInTheMist.mp3";

export const playlist: PlaylistType[] = [
  {
    id: 1,
    name: "Lofi lời Việt",
    songs: [
      {
        id: 1,
        name: "Hẹn Em ở Lần Yêu Thứ 2",
        src: HenEmOLanYeuThu2,
      },
      {
        id: 2,
        name: "Sau Những Lần Đau",
        src: SauNhungLanDau,
      },
      {
        id: 3,
        name: "Suýt Nữa Thì",
        src: SuytNuathi,
      },
    ],
  },
  {
    id: 2,
    name: "Lofi Chill Không Lời",
    songs: [
      {
        id: 1,
        name: "Where I go",
        src: WhereIgo,
      },
      {
        id: 2,
        name: "Walking On Clouds",
        src: WalkingOnClouds,
      },
      {
        id: 3,
        name: "Leap Of Fraith",
        src: LeapOfFraith,
      },
      {
        id: 4,
        name: "Whispers In The Mist",
        src: WhispersInTheMist,
      },
    ],
  },
];
