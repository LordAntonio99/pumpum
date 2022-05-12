export default function ValidateEmail(email)
{
    return /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>().,;s@"]+.{0,1})+([^<>().,;:s@"]{2,}|[d.]+))$/.test(email);
}