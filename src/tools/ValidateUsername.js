export default function ValidateUsername(username) {
  return /^[a-z0-9_.]+$/.test(username);
}
