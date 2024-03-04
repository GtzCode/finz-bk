import { NotFoundException } from "@nestjs/common";
import { ErrorApi } from "../types/error";


export const MessageCrudError = {
    find: "No existe información en la base de datos.",
    create: "Error al intetar insertar el registro en la base de datos.",
    update: "Error al intetar actualizar el registro en la base de datos.",
    delete: "Error al intetar eliminar el registro en la base de datos.",
}



export function errorException(description: string, status: number) {

    let message: string = "En este momento, el servicio no está disponible. Nuestro equipo está trabajando para solucionar el problema. Por favor, inténtelo más tarde.";
    switch (status) {
        case 400:
            message = "Oops,La solicitud que has enviado no es válida. Por favor, verifica la información y/o vuelve a intentarlo.";
        case 401:
            message = "Acceso no autorizado. Asegúrese de tener las credenciales correctas y/o vuelva a intentarlo.";
        case 404:
            message = "Los datos solicitados no han sido encontrados. Por favor, verifique la información proporcionada y/o vuelva a intentarlo.";
        case 422:
            message = "No se pueden procesar los datos enviados. Por favor, verifique la información proporcionada y/o vuelva a intentarlo.";
    }

    const Error:ErrorApi = {
        code:status,
        error:description,
        message:message
    };

    throw new NotFoundException(JSON.stringify(Error));

}

export function errorExceptionDB(vpError:any) {

    const vlErrorTag:string = 'dbError>';
    const vlError:string = (vpError.driverError.toString().replace('error:','')).trim();

    if(vlError.includes(vlErrorTag)) {
        const vlArrayError:string[] = vlError.split(vlErrorTag);
        const vlLastIndex:number = vlArrayError.length - 1;
        const vlLastErrot:string = vlArrayError[vlLastIndex];
        const vlLengthError:number = vlLastErrot.length - (vlLastIndex-1);
        const vlErrorDB:string = vlLastErrot.substring(0,vlLengthError);
        const Error = `{${vlErrorDB.replaceAll('>','"')}}`;
        throw new NotFoundException(Error);
    } else {
        const ErrorOther:object = {
            code:512,
            error: `Existe un error en la base de datos. (code: ${vpError.code})`,
            message:vlError
        };
        throw new NotFoundException(JSON.stringify(ErrorOther));
    }
     

}