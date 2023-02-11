export declare class RegExCreatorService {
    createExpressionRegExps(): {
        expressionWithBracketsRegEx: RegExp;
        noBracketsExpressionRegEx: RegExp;
        exponentialRegEx: RegExp;
    };
    makeOperatorsRegEx(): {
        regExp: string;
        type: string;
    }[];
}
