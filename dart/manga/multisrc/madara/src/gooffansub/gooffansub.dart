import '../../../../../../model/source.dart';

  Source get gooffansubSource => _gooffansubSource;
            
  Source _gooffansubSource = Source(
  itemType: ItemType.manga,
    name: "Goof Fansub",
    baseUrl: "https://gooffansub.com",
    lang: "pt-BR",
    isNsfw:true,
    typeSource: "madara",
    iconUrl:"https://raw.githubusercontent.com/$repo/$branchName/dart/manga/multisrc/madara/src/gooffansub/icon.png",
    dateFormat:"dd/MM/yyy",
    dateFormatLocale:"pt-br",
  );