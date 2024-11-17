export interface IProjectDetails {
    ProjectImageSource: string,
    ProjectImageAltText: string,
    ProjectTitle: string,
    ProjectDescription: string,
    TechStackImageSources: {
        ImageSource: string,
        ImageAltText: string
    }[],
    SkillsLearnt: string[],
    SourceCodeURL: string,
    LiveSiteURL: string
} 