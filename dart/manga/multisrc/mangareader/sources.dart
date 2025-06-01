import '../../../../model/source.dart';
import 'src/funtoons/funtoons.dart';
import 'src/dojingnet/dojingnet.dart';
import 'src/kanzenin/kanzenin.dart';
import 'src/kumapoi/kumapoi.dart';
import 'src/manhwax/manhwax.dart';
import 'src/mihentai/mihentai.dart';
import 'src/atlantisscan/atlantisscan.dart';
import 'src/inarimanga/inarimanga.dart';
import 'src/mangashiina/mangashiina.dart';
import 'src/nekoscans/nekoscans.dart';
import 'src/traduccionesmoonlight/traduccionesmoonlight.dart';
import 'src/lunarscans/lunarscans.dart';
import 'src/lunarscanshentai/lunarscanshentai.dart';
import 'src/manhwaindo/manhwaindo.dart';
import 'src/manhwalandmom/manhwalandmom.dart';
import 'src/sekaikomik/sekaikomik.dart';
import 'src/sektedoujin/sektedoujin.dart';
import 'src/mangamate/mangamate.dart';
import 'src/franxxmangas/franxxmangas.dart';
import 'src/hikariscan/hikariscan.dart';
import 'src/imaginescan/imaginescan.dart';
import 'src/limanga/limanga.dart';
import 'src/silencescan/silencescan.dart';
import 'src/starlightscan/starlightscan.dart';
import 'src/dragonmanga/dragonmanga.dart';
import 'src/ecchidoujin/ecchidoujin.dart';
import 'src/lamimanga/lamimanga.dart';
import 'src/makimaaaaa/makimaaaaa.dart';
import 'src/ntrmanga/ntrmanga.dart';
import 'src/sodsaime/sodsaime.dart';
import 'src/arcurafansub/arcurafansub.dart';
import 'src/mangasiginagi/mangasiginagi.dart';
import 'src/moondaisyscans/moondaisyscans.dart';

const mangareaderVersion = "0.1.6";
const mangareaderSourceCodeUrl =
    "https://raw.githubusercontent.com/$repo/$branchName/dart/manga/multisrc/mangareader/mangareader.dart";

List<Source> get mangareaderSourcesList => _mangareaderSourcesList;
List<Source> _mangareaderSourcesList = [
//Dojing.net (ID)
  dojingnetSource,
//Kanzenin (ID)
  kanzeninSource,
//KumaPoi (ID)
  kumapoiSource,
//Manhwax (EN)
  manhwaxSource,
//Mihentai (ALL)
  mihentaiSource,
//Atlantis Scan (ES)
  atlantisscanSource,
//InariManga (ES)
  inarimangaSource,
//Manga Mukai (ES)
  mangashiinaSource,
//NekoScans (ES)
  nekoscansSource,
//Traducciones Moonlight (ES)
  traduccionesmoonlightSource,
//Lunar Scans (EN)
  lunarscansSource,
//Lunar Scans Hentai (FR)
  lunarscanshentaiSource,
//Manhwa Indo (ID)
  manhwaindoSource,
//ManhwaLand.mom (ID)
  manhwalandmomSource,
//Sekaikomik (ID)
  sekaikomikSource,
//Sekte Doujin (ID)
  sektedoujinSource,
//漫画メイト (JA)
  mangamateSource,
//Franxx Mangás (PT-BR)
  franxxmangasSource,
//Hikari Scan (PT-BR)
  hikariscanSource,
//Imagine Scan (PT-BR)
  imaginescanSource,
//Li Manga (PT-BR)
  limangaSource,
//Silence Scan (PT-BR)
  silencescanSource,
//Starlight Scan (PT-BR)
  starlightscanSource,
//DragonManga (TH)
  dragonmangaSource,
//Ecchi-Doujin (TH)
  ecchidoujinSource,
//Lami-Manga (TH)
  lamimangaSource,
//Makimaaaaa (TH)
  makimaaaaaSource,
//NTR-Manga (TH)
  ntrmangaSource,
//สดใสเมะ (TH)
  sodsaimeSource,
//Arcura Fansub (TR)
  arcurafansubSource,
//Manga Siginagi (TR)
  mangasiginagiSource,
//Moon Daisy Scans (TR)
  moondaisyscansSource,
//FunToons (TH)
  funtoonsSource
]
    .map((e) => e
      ..sourceCodeUrl = mangareaderSourceCodeUrl
      ..version = mangareaderVersion)
    .toList();
