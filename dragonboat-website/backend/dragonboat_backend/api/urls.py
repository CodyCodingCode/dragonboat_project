from django.urls import path
from .views import EventList, ParticipantList

urlpatterns = [
    path('events/', EventList.as_view(), name='event-list'),
    path('participants/', ParticipantList.as_view(), name='participant-list'),
]
