from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Participant
from .serializers import ParticipantSerializer
import logging


class EventList(APIView):
    def get(self, request):
        events = [
            {'name': 'Initial Event', 'date': '2024-05-01'},
            {'name': 'New Event', 'date': '2024-07-15'}
        ]
        return Response(events, status=status.HTTP_200_OK)
    
logger = logging.getLogger(__name__)

class ParticipantList(APIView):
    def get(self, request):
        participants = Participant.objects.all()
        serializer = ParticipantSerializer(participants, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ParticipantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        logger.error(f"Invalid data: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
