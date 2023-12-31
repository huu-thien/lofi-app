export interface TypeTime {
  hours: string;
  minutes: string;
  seconds: string;
  period: string;
}
export interface SongType {
  id: number;
  name: string;
  src: string;
}
export interface PlaylistType {
  id: number;
  name: string;
  songs: SongType[];
}
export interface ScenesType {
  id: number;
  title: string;
  video_sun: string;
  video_night: string;
  image: string;
}
export interface SoundsEffectType {
  id: number;
  title: string;
  sound: string;
}