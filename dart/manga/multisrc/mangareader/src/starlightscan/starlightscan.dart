import '../../../../../../model/source.dart';

Source get starlightscanSource => _starlightscanSource;
Source _starlightscanSource = Source(
  itemType: ItemType.manga,
    name: "Starlight Scan",
    baseUrl: "https://starligthscan.com",
    lang: "pt-br",
    isNsfw:true,
    typeSource: "mangareader",
    iconUrl: "https://raw.githubusercontent.com/$repo/$branchName/dart/manga/multisrc/mangareader/src/starlightscan/icon.png",
    dateFormat:"dd/MM/yyyy",
    dateFormatLocale:"pt-br"
  );
