from django.utils import timezone

from core import celery_app
from shortenings.models import Shortening


@celery_app.task
def delete_expired_shortenings():
    Shortening.objects.filter(expires_at__lt=timezone.now()).delete()


celery_app.add_periodic_task(5, delete_expired_shortenings.s())
