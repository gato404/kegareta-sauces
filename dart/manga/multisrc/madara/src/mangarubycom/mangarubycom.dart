import '../../../../../../model/source.dart';

  Source get mangarubycomSource => _mangarubycomSource;
            
  Source _mangarubycomSource = Source(
  itemType: ItemType.manga,
    name: "MangaRuby.com",
    baseUrl: "https://mangaruby.com",
    lang: "en",
    isNsfw:true,
    typeSource: "madara",
    iconUrl:"https://raw.githubusercontent.com/$repo/$branchName/dart/manga/multisrc/madara/src/mangarubycom/icon.png",
    dateFormat:"MMMM dd, yyyy",
    dateFormatLocale:"en_us",
  );