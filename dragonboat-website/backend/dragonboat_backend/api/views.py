from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class EventList(APIView):
    def get(self, request):
        events = [
            {'name': 'Spring Festival', 'date': '2024-05-01'},
            {'name': 'Summer Regatta', 'date': '2024-07-15'}
        ]
        return Response(events, status=status.HTTP_200_OK)

class ParticipantList(APIView):
    def get(self, request):
        participants = [
            {'name': 'John Doe', 'team': 'Red Dragons'},
            {'name': 'Jane Smith', 'team': 'Blue Waves'}
        ]
        return Response(participants, status=status.HTTP_200_OK)
