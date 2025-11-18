class Validators {
  static bool isPhone(String input) {
    return RegExp(r"^\+?[0-9]{7,15}").hasMatch(input);
  }
}
