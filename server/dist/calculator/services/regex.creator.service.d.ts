import { IRegExCreatorService } from '../interfaces/calculator.services.interfaces';
export declare class DefaultRegExCreatorService implements IRegExCreatorService {
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
