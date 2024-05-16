import { useRef, useEffect } from "react";

export function useBookRoomTypeTemplate(categoryName) {

    const template = "mailto:reservacionesaqsm@posadas.com?subject=Room%20Reservation%20for%20Coco%20%26%20Adam%E2%80%99s%20Wedding%20-%20Group%20Code%20G1RC3D&body=Dear%20Reservations%20Team%2C%0A%0AI%20would%20like%20to%20book%20a%20room%20for%20Coco%20and%20Adam%27s%20wedding%20in%20San%20Miguel%20de%20Allende%20(Group%20Code%20G1RC3D).%20Please%20find%20my%20details%20below%20for%20the%20reservation%3A%0A%0A-%20Name%3A%0A-%20Email%3A%0A-%20Arrival%20Date%3A%0A-%20Departure%20Date%3A%0A-%20Room%20Type%3A%20%0A-%20Number%20of%20Adults%3A%0A-%20Number%20of%20Children%3A%0A-%20Names%20of%20Additional%20Guests%20Staying%20in%20Room%3A%0A-%20Telephone%3A%0A-%20Address%3A%20%0A-%20City%3A%20%0A-%20State%3A%0A-%20Postal%20Code%3A%0A-%20Country%3A%0A-%20Comments%3A%20%0A%0APlease%20confirm%20the%20availability%20of%20the%20rooms%20and%20any%20further%20steps%20needed%20to%20finalize%20my%20booking.%0A%0AThank%20you%20very%20much!%0A%0ABest%20regards%2C%0A"
    const roomName =categoryName.toUpperCase()
    const roomNameSubject = "=".concat(roomName.split(" ").join("%20").concat("%20|%20"))
    const addSubject = template.split("=Room%20").join(roomNameSubject)
    const roomNameBody = "Type%3A%20".concat(roomName.split(" ").join("%20"))
    const addBody = addSubject.split("Type%3A").join(roomNameBody)
    const bookNowLink = addBody;
    return bookNowLink;
}