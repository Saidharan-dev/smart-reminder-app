import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Smart Reminder')),
      body: Center(child: Text('Home Screen - event list goes here')),
    );
  }
}
