class EventModel {
  final String id;
  final String title;
  final DateTime date;
  final String phoneNumber;

  EventModel({required this.id, required this.title, required this.date, required this.phoneNumber});

  Map<String, dynamic> toJson() => {
    'id': id,
    'title': title,
    'date': date.toIso8601String(),
    'phoneNumber': phoneNumber,
  };
}
