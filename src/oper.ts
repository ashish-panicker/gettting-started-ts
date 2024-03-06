// generics
export default function sum<T extends number>(...numbers): T {
    return numbers.reduce((accumulated, current) => accumulated + current, 0)
}
