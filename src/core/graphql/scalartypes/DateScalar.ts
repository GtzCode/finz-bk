import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', (type) => Date)
export class DateScalar implements CustomScalar<string, string> {
    description = 'Date custom scalar type';

    parseValue(value: string): string {
        return value; // value from the client
    }

    serialize(value: string): string {
        return formatDateGetDatabase(value); // value sent to the client
    }

    parseLiteral(ast: ValueNode): string {
        if (ast.kind === Kind.STRING) {
            return  formatDateGetClient(ast.value);
        }
        return null;
    }
}



function formatDateGetDatabase(vpDate: string) {

    const vlDate      = new Date(vpDate);

    const vlYear      = vlDate.getFullYear();
    const vlMonth     = vlDate.getMonth() + 1; // JS months are 0 indexed, 0 = January, 11 = December
    const vlDay       = vlDate.getDate();
    const vlHours     = vlDate.getHours();
    const vlMinutes   = vlDate.getMinutes();
    const vlSeconds   = vlDate.getSeconds();
    const vlMilliseconds   = vlDate.getMilliseconds();

    const vlFecha:string = `${vlYear}-${vlMonth}-${vlDay}`;
    const vlHora:string = `${vlHours}:${vlMinutes}:${vlSeconds}.${vlMilliseconds}` === "0:0:0.0" ? 
                            "":` ${vlHours}:${vlMinutes}:${vlSeconds}.${vlMilliseconds}`;

    return(vlFecha + vlHora);
}

function formatDateGetClient(vpDate: string) {
    
    let vlDate = new Date();

    if(vpDate.length === 10) {
        vlDate = new Date(vpDate+'T07:00:00.000Z');
    } else {
        vlDate = new Date(vpDate);
    }

    const vlYear      = vlDate.getFullYear();
    const vlMonth     = vlDate.getMonth() + 1; // JS months are 0 indexed, 0 = January, 11 = December
    const vlDay       = vlDate.getDate();
    const vlHours     = vlDate.getHours();
    const vlMinutes   = vlDate.getMinutes();
    const vlSeconds   = vlDate.getSeconds();
    const vlMilliseconds   = vlDate.getMilliseconds();

    const vlFecha:string = `${vlYear}-${vlMonth}-${vlDay}`;
    const vlHora:string = `${vlHours}:${vlMinutes}:${vlSeconds}.${vlMilliseconds}` === "0:0:0.0" ? 
                            "":` ${vlHours}:${vlMinutes}:${vlSeconds}.${vlMilliseconds}`;
                            
    return(vlFecha + vlHora);
}



