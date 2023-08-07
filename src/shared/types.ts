export interface TypeTime {
  hours: string;
  minutes: string;
  seconds: string;
  period: string;
}
export interface SongType {
  name: string;
  src: string;
}
export interface PlaylistType {
  id: number;
  name: string;
  songs: SongType[];
}
