import '../../../../../../model/source.dart';

  Source get flextapescansSource => _flextapescansSource;
            
  Source _flextapescansSource = Source(
  itemType: ItemType.manga,
    name: "Flex Tape Scans",
    baseUrl: "https://flextapescans.com",
    lang: "en",
    isNsfw:true,
    typeSource: "madara",
    iconUrl:"https://raw.githubusercontent.com/$repo/$branchName/dart/manga/multisrc/madara/src/flextapescans/icon.png",
    dateFormat:"MM/dd/yyy",
    dateFormatLocale:"en",
  );