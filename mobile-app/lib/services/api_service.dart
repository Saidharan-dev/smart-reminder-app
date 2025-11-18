import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  final String baseUrl;
  ApiService(this.baseUrl);

  Future<http.Response> createEvent(Map<String, dynamic> payload) async {
    final res = await http.post(Uri.parse('\$baseUrl/events'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(payload),
    );
    return res;
  }
}
