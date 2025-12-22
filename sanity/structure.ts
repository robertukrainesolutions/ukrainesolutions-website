import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Projects folder
      S.listItem()
        .title('Projects')
        .child(
          S.documentTypeList('projectPost')
            .title('Projects')
        ),
      // Advocacy folder
      S.listItem()
        .title('Advocacy')
        .child(
          S.documentTypeList('advocacyPost')
            .title('Advocacy Posts')
        ),
    ])
