export interface SkillModel {
    programming: Array<SkillItemModel>;
    tools: Array<SkillItemModel>;
}

export interface SkillItemModel {
    iconSet: string;
    icon: string;
    title: string;
}
